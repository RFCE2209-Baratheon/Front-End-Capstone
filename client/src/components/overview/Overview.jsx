import React, { useState, useEffect, useContext } from 'react';
import ProductInformation from './ProductInformation.jsx';
import ImageGallery from './ImageGallery.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';
import exampleProductData from '../../example_data/get_all_products.js';
import exampleStyleData from '../../example_data/get_styles.js';
import exampleReviews from '../../example_data/get_reviews.js';
import styled from 'styled-components';
import GlobalStyle from './globalStyles.js';
import {interactionContext} from '../App.jsx';

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: ${props => props.default ? '550px auto' : 'auto 550px auto'};
  grid-template-rows: auto;
  grid-template-areas: ${props => props.default ?
    `"left1 right1"
    "left1 right2"
    "left1 right3"` :
    `". left1 ."
    ". left1 . "
    ". left1 . "`};
  column-gap: 10px;
`

const StyledImageGallery = styled.div`
  grid-area: left1;
`

const StyledProductInfo = styled.div`
  grid-area: right1;
`

const StyledStyleSelector = styled.div`
  grid-area: right2;
`
const StyledAddToCart = styled.div`
  grid-area: right3;
`

const Overview = () => {
  const [productData, setProductData] = useState(exampleProductData[0]);
  const [productId, setProductId] = useState(productData.id);

  const [styleData, setStyleData] = useState(exampleStyleData.results);
  const [currentStyle, setCurrentStyle] = useState(styleData[0]);

  const [reviewData, setReviewData] = useState(exampleReviews);

  const [defaultView, setDefaultView] = useState(true);
  const [expandedView, setExpandedView] = useState(false);
  console.log('interaction context in overview', interactionContext)
  const postInteraction = useContext(interactionContext);


  postInteraction("h1", "overview", "22-22-22");

  console.log('productData: ', productData);
  console.log('productId: ', productId);
  console.log('styleData: ', styleData);
  console.log('currentStyle: ', currentStyle);

  var onStyleClick = (e, ID) => {
    console.log('e.id: ', e.target.id)
    for (var i = 0; i < styleData.length; i++) {
      if (styleData[i].style_id === ID) {
        setCurrentStyle(styleData[i]);
      }
    }
  }

  const changeView = () => {
    setDefaultView(!defaultView);
    setExpandedView(!expandedView);
  }

  return (
    <>
    <GlobalStyle />
      <StyledContainer default={defaultView}>
      <StyledImageGallery>
        <ImageGallery styleImages={currentStyle.photos} defaultView={defaultView} expandedView={expandedView} changeView={changeView} />
      </StyledImageGallery>
        {defaultView && <>
          <StyledProductInfo>
            <ProductInformation productData={productData} productId={productId} currentStyle={currentStyle} reviewData={reviewData}/>
          </StyledProductInfo>
          <StyledStyleSelector>
            <StyleSelector styleData={styleData} currentStyle={currentStyle} onStyleClick={onStyleClick} />
            </StyledStyleSelector>
          <StyledAddToCart>
            <AddToCart currentStyleSkus={currentStyle.skus} />
          </StyledAddToCart>
        </>}
    </StyledContainer>
    </>
  );
}

export default Overview;
