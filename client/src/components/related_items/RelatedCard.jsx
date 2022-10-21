import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { AiOutlineStar } from 'react-icons/ai';
import {
  RelatedCardGraphic, TextOnCard, ImageOnCard, SalePrice, PriceStruckthrough, RelatedActnBttn
} from './assets/relatedBlock.style.js';

const RelatedCard = function ({
  category, productName, price, image, salePrice,
}) {
  return (
    <RelatedCardGraphic data-testid="cardOne">
      <RelatedActnBttn />
      <ImageOnCard image={image} />
      <TextOnCard>
        <p>
          {category}
          {' '}
          <br />
          {productName}
          {' '}
          <br />
          {salePrice ? (
            <div>
              {' '}
              <SalePrice>
                {' '}
                $
                {salePrice}
              </SalePrice>
              {' '}
              <PriceStruckthrough>
                {' '}
                $
                {price}
                {' '}
              </PriceStruckthrough>
            </div>
          ) : `$${ price}`}
        </p>
        <div>
          <AiOutlineStar />
          {' '}
          <AiOutlineStar />
          {' '}
          <AiOutlineStar />
          {' '}
          <AiOutlineStar />
          {' '}
          <AiOutlineStar />
        </div>
      </TextOnCard>
    </RelatedCardGraphic>
  );
};

export default RelatedCard;
