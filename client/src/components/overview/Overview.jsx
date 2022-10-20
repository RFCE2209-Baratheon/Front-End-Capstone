import React, { useState, useEffect } from 'react';
import ProductInformation from './ProductInformation.jsx';
import ImageGallery from './ImageGallery.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';
import exampleProductData from '../../example_data/get_all_products.js';
import exampleStyleData from '../../example_data/get_styles.js';
import exampleReviews from '../../example_data/get_reviews.js';
import './assets/styles.css';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 550px auto;
  grid-template-rows: auto;
  grid-template-areas:
    "left1 right1"
    "left1 right2"
    "left1 right3";
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

  return (
    <>
      <StyledContainer>
        <StyledImageGallery>
          <ImageGallery styleImages={currentStyle.photos} />
        </StyledImageGallery>
        <StyledProductInfo>
          <ProductInformation productData={productData} productId={productId} currentStyle={currentStyle} reviewData={reviewData}/>
        </StyledProductInfo>
        <StyledStyleSelector>
          <StyleSelector styleData={styleData} currentStyle={currentStyle} onStyleClick={onStyleClick} />
          </StyledStyleSelector>
        <StyledAddToCart>
          <AddToCart />
        </StyledAddToCart>

      </StyledContainer>
    </>
  );
}

export default Overview;
