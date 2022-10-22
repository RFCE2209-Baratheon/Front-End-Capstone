import React, { useState, useEffect } from 'react';
import ComparisonModal from './ComparisonModal.jsx';
import styled from 'styled-components';
import { AiOutlineStar } from 'react-icons/ai';
import {
  RelatedCardGraphic, TextOnCard, ImageOnCard, SalePrice, PriceStruckthrough, RelatedActnBttn
} from './Assets/comparisonWidget.style.js';

const RelatedCard = function ({
  category, productName, price, image, salePrice, features, productId, setProductId
}) {
  const [showCompModal, setShowCompModal] = useState(false);

  const openCompModal = function () {
    setShowCompModal(!showCompModal);
    console.log('being clicked', showCompModal);
  };

  return (
    <RelatedCardGraphic data-testid="cardOne">
      {showCompModal ? (<ComparisonModal productName={productName} category={category} features={features} productId={productId} setProductId={setProductId} /> ): null}
      <RelatedActnBttn onClick={openCompModal}/>
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
