import React from 'react';
import { RelatedCardGraphic, TextOnCard, ImageOnCard } from './assets/relatedBlock.style.js';

const OutfitCards = function () {
  return (
    <RelatedCardGraphic data-testid="cardOne">
    {/* <TextOnCard>
      <p>
        Category
        {' '}
        <br />
        Product Name
        {' '}
        <br />
        $ Price
      </p>
      <div>
      <AiOutlineStar /> <AiOutlineStar /> <AiOutlineStar /> <AiOutlineStar /> <AiOutlineStar />
      </div>
    </TextOnCard> */}
  </RelatedCardGraphic>
  )
};

export default OutfitCards;