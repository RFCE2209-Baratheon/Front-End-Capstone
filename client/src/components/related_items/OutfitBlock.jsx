import React, {useEffect, useState} from 'react';
import {
  RelatedBlockContainer, LeftArrow, RightArrow,
} from './Assets/comparisonWidget.style.js';
import RelatedCard from './RelatedCard.jsx';
import OutfitCards from './OutfitCards.jsx';

const OutfitBlock = function () {

  return (
    <div>
      OutfitBlock
      <h3>Related Products</h3>
      <RelatedBlockContainer>
        <div id="slider">
          <OutfitCards />
          <OutfitCards />
          <OutfitCards />
          <OutfitCards />
          <OutfitCards />
        </div>
      </RelatedBlockContainer>
    </div>
  )

};

export default OutfitBlock;