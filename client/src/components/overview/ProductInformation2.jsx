
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {PropTypes} from 'prop-types'
import { FaTwitter, FaFacebook, FaPinterest } from 'react-icons/fa';
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

const StarP = styled.p`
  width: min-content;
  text-align:center;
`

const ProductInformation2 = ({ productData }) => {

  return (
    <>
      {productData.description ? <div>
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

//please review this proptype
ProductInformation2.propTypes = {

  productData: PropTypes.object,

}

export default ProductInformation2;