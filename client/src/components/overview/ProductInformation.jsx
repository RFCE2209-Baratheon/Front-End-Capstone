/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaTwitter } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaPinterest } from 'react-icons/fa';


const ProductInformation = ({ productData, productId, styleData, styleId, reviewData }) => {

  const StyledSalePrice = styled.div`
    color: red;
  `;

  return (
    <>
      <h3>[Product Information]</h3>
      {reviewData ?
      <div>
        <span>⭐️⭐️⭐️⭐️⭐️</span> <a href="">Link to [#] reviews</a>
      </div> : null}

      <div>{productData.category.toUpperCase()}</div>
      <h3>{productData.name}</h3>

      {styleData.sale_price ?
        <div><s>{styleData.original_price}</s> <StyledSalePrice>{styleData.sale_price}</StyledSalePrice></div>
      : styleData.original_price}

      {productData.description ?
        <div>
          <h3>{productData.slogan}</h3>
          <div>{productData.description}</div>
        </div>
      : null}
      <div>
        <FaTwitter/> <FaPinterest/> <FaFacebook/>
      </div>
    </>
  )
}

export default ProductInformation;