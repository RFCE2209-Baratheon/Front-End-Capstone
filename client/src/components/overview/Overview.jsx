import React, { useState, useEffect, useContext } from 'react';
import ProductInformation1 from './ProductInformation.jsx';
import ProductInformation2 from './ProductInformation2.jsx';
import ImageGallery from './ImageGallery.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';
import styled from 'styled-components';
import axios from 'axios';

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: ${props => props.default ? '650px auto' : 'auto 550px auto'};
  grid-template-rows: auto;
  grid-template-areas: ${props => props.default ?
    `"left1 right1"
    "left1 right2"
    "left1 right3"
    "bottom bottom"` :
    `". left1 ."
    ". left1 . "
    ". left1 . "
    "bottom bottom"`};
  column-gap: 10px;
  min-width: 1100px;
`

const StyledImageGallery = styled.div`
  grid-area: left1;
`

const StyledProductInfo = styled.div`
  grid-area: right1;
  max-width: 720px;
`
const StyledProductInfo2 = styled.div`
  grid-area: bottom;
  max-width: 1100px;
`

const StyledStyleSelector = styled.div`
  grid-area: right2;
`
const StyledAddToCart = styled.div`
  grid-area: right3;
`

const Overview = ({ productId, average, reviews }) => {
  const [styleData, setStyleData] = useState(null);
  const [currentStyle, setCurrentStyle] = useState(null);
  const [productData, setProductData] = useState(null);
  const [defaultView, setDefaultView] = useState(true);
  const [expandedView, setExpandedView] = useState(false);
  const [styleId, setStyleId] = useState(null);


  useEffect(()=> {
    axios.get(`/products/${productId}/styles`)
      .then((response) => {
        setStyleData(response.data.results)
        setCurrentStyle(response.data.results[0])
        setStyleId(response.data.results[0].style_id)

      })
      .catch((error) => {
        console.log('error, could not get styles from api. error: ', error)
      });

    axios.get(`products/${productId}`)
    .then((response) => {
      setProductData(response.data);
    })
    .catch((error) => {
      console.log('error, could not get current product data from api. error: ', error)
    });

  }, [productId]);

  const onStyleClick = (e, id) => {
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
      <StyledContainer data-testid="overview" default={defaultView}>
        <StyledImageGallery>
          {currentStyle && <ImageGallery styleImages={currentStyle.photos} defaultView={defaultView} expandedView={expandedView} changeView={changeView} />}
        </StyledImageGallery>

        {defaultView && <>
          <StyledProductInfo>
            {productData && currentStyle && (<ProductInformation1 productData={productData} productId={productId} currentStyle={currentStyle} average={average} reviews={reviews}/>)}
          </StyledProductInfo>
          <StyledStyleSelector>
            {styleData && currentStyle && (<StyleSelector styleData={styleData} currentStyle={currentStyle} onStyleClick={onStyleClick} styleId={styleId} setStyleId={setStyleId} />)}
            </StyledStyleSelector>
          <StyledAddToCart>
            {currentStyle && <AddToCart currentStyleSkus={currentStyle.skus} />}
          </StyledAddToCart>
          <StyledProductInfo2>
            {productData && (<ProductInformation2 productData={productData}/>)}
          </StyledProductInfo2>
        </>}

      </StyledContainer>
    </>
  );
}

export default Overview;
