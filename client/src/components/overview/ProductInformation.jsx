/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaTwitter, FaFacebook, FaPinterest } from 'react-icons/fa';

const StyledSalePrice = styled.span`
  color: red;
`

const StyledSocials = styled.div`
  > * {
    margin: 10px;
    color: #5A5A5A;
    &: hover {
      color: #1C305C;
    };
}
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
        <a target="blank" href={"https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.facebook.com%2F&amp;src=sdkpreparse"}>
        <FaTwitter size={20}/></a>
        <a target="blank" href={"https://www.pinterest.com/pin/99360735500167749/"}><FaPinterest size={20}/></a>
        <a target="blank" href={"https://twitter.com/intent/tweet?text=Hello%20world"}><FaFacebook size={20}/></a>
      </StyledSocials>
    </>
  )
}

export default ProductInformation;