/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaTwitter, FaFacebook, FaPinterest } from 'react-icons/fa';

const StyledSalePrice = styled.div`
  color: red;
`

const StyledSocials = styled.div`
`

const TwitterButton = styled(FaTwitter)`
`

const PinterestButton = styled(FaFacebook)`
`

const FacebookButton = styled(FaPinterest)`
`

const ProductInformation = ({ productData, currentStyle, reviewData }) => {

  return (
    <>
      {reviewData ?
      <p>
        <span>⭐️⭐️⭐️⭐️⭐️</span> <a href="">Read all [#] reviews</a>
      </p> : null}

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
        <TwitterButton/> <PinterestButton/> <FacebookButton/>
      </StyledSocials>
    </>
  )
}

export default ProductInformation;