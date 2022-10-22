import React, { useState, useEffect } from 'react';
import ProductInformation from './ProductInformation.jsx';
import ImageGallery from './ImageGallery.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';
import exampleProductData from '../../example_data/get_all_products.js';
import exampleStyleData from '../../example_data/get_styles.js';
import exampleReviews from '../../example_data/get_reviews.js';
import styled from 'styled-components';
import GlobalStyle from './globalStyles.js';
import axios from 'axios';

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

const Overview = ({productId}) => {


  const [styleData, setStyleData] = useState(null);
  const [currentStyle, setCurrentStyle] = useState(null);
  const [productData, setProductData] = useState(null);

  useEffect(()=> {

    axios.get(`/products/${productId}/styles`)
      .then((response) => {
        setStyleData(response.data.results)
        setCurrentStyle(response.data.results[0])
      })
      .catch((error) => {
        console.log('error, could not get styles from api. error: ', error)
      });
      axios.get(`products/${productId}`)
      .then((response) => {
        console.log('PRODUCT DATA IS RIGHT HERE', response.data)
        setProductData(response.data);
        //setProductId(parseInt(response.data.id))
      })
      .catch((error) => {
        console.log('error, could not get current product data from api. error: ', error)
      });
  }, [productId])


  // const [productData, setProductData] = useState(allProducts[1]);
  // const [productId, setProductId] = useState(productID);
  // console.log('productData:', productData)
  // const [styleData, setStyleData] = useState(exampleStyleData.results);
  // const [currentStyle, setCurrentStyle] = useState(styleData[0]);

  const [reviewData, setReviewData] = useState(exampleReviews);

  const [defaultView, setDefaultView] = useState(true);
  const [expandedView, setExpandedView] = useState(false);

   console.log('productData: ', productData);
   console.log('productId: ', productId);
   console.log('styleData: ', styleData);
   console.log('currentStyle: ', currentStyle);

  var onStyleClick = (id) => {
    for (var i = 0; i < styleData.length; i++) {
      if (styleData[i].style_id === id) {
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
        {currentStyle && <ImageGallery styleImages={currentStyle.photos} defaultView={defaultView} expandedView={expandedView} changeView={changeView} />}
      </StyledImageGallery>
        {defaultView && <>
          <StyledProductInfo>
            {productData && currentStyle && (<ProductInformation productData={productData} productId={productId} currentStyle={currentStyle} reviewData={reviewData}/>)}
          </StyledProductInfo>
          <StyledStyleSelector>
            {styleData && currentStyle && (<StyleSelector styleData={styleData} currentStyle={currentStyle} onStyleClick={onStyleClick} />)}
            </StyledStyleSelector>
          <StyledAddToCart>
            {currentStyle && <AddToCart currentStyleSkus={currentStyle.skus} />}
          </StyledAddToCart>
        </>}
    </StyledContainer>
    </>
  );
}

export default Overview;
