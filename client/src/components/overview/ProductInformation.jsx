
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {PropTypes} from 'prop-types'

import StarRatingStaticSummary from '../shared_components/StarRatingStaticSummary.jsx';

const StyledSalePrice = styled.span`
  color: red;
`

const StyledLink = styled.a`
  color: #546A7B;
  text-decoration: none;

  &: hover {
    color: #62929E;
  };

  &: visited {
    color: #546A7B
  }
`

const StarP = styled.p`
  width: min-content;
  text-align: center;
`

const StyledProductInfo = styled.div`
  // display: flex;

`

const ProductInformation = ({ productData, currentStyle, average, reviews }) => {

  return (
    <StyledProductInfo data-testid="product-info">
      {reviews > 0 ?
      <StarP>
        <StarRatingStaticSummary rating={average}/>
        <StyledLink href="#review">Read all {reviews} reviews</StyledLink>
      </StarP> : null}

      <div>{productData.category.toUpperCase()}</div>
      <h1>{productData.name}</h1>

      {currentStyle.sale_price ?
        <div><s>${currentStyle.original_price}</s> <StyledSalePrice className="price">${currentStyle.sale_price}</StyledSalePrice></div>
      : '$' + currentStyle.original_price}
    </StyledProductInfo>
  )
}

ProductInformation.propTypes = {
  productData: PropTypes.object,
  currentStyle: PropTypes.object,
  average: PropTypes.string,
  reviews: PropTypes.number
}

export default ProductInformation;