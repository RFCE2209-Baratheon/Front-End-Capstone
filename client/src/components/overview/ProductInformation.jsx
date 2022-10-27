
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {PropTypes} from 'prop-types'
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter';
import {FaFacebook} from '@react-icons/all-files/fa/FaFacebook'
import {FaPinterest} from '@react-icons/all-files/fa/FaPinterest'

import StarRatingStaticSummary from '../shared_components/StarRatingStaticSummary.jsx';

const StyledSalePrice = styled.span`
  color: red;
`

const StyledSocials = styled.p`
  > * {
    margin: 10px;
    color: #546A7B;
    padding: 10px;
    &: hover {
      color: #62929E;
    };
  }
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

const StarDiv = styled.div`
  width: min-content;
  text-align:center;
`

const ProductInformation = ({ productData, currentStyle, average, reviews }) => {

  return (
    <div data-testid="product-info">
      {reviews > 0 ?
      <StarDiv>
        <span><StarRatingStaticSummary rating={average}/></span>
        <StyledLink href="#review">Read all {reviews} reviews</StyledLink>
      </StarDiv> : null}

      <div>{productData.category.toUpperCase()}</div>
      <h1>{productData.name}</h1>

      {currentStyle.sale_price ?
        <div><s>${currentStyle.original_price}</s> <StyledSalePrice>${currentStyle.sale_price}</StyledSalePrice></div>
      : '$' + currentStyle.original_price}

      {productData.description ?
        <div>
          <h2>{productData.slogan}</h2>
          <p>{productData.description}</p>
        </div>
      : null}
      <StyledSocials>
        <a target="blank" href={"https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.facebook.com%2F&amp;src=sdkpreparse"}>
        <FaTwitter size={20}/></a>
        <a target="blank" href={"https://www.pinterest.com/pin/99360735500167749/"}><FaPinterest size={20}/></a>
        <a target="blank" href={"https://twitter.com/intent/tweet?text=Hello%20world"}><FaFacebook size={20}/></a>
      </StyledSocials>
    </div>
  )
}

//please review this proptype
ProductInformation.propTypes = {

  productData: PropTypes.object,
  currentStyle: PropTypes.object,
  average: PropTypes.number,
  reviews: PropTypes.number

}

export default ProductInformation;