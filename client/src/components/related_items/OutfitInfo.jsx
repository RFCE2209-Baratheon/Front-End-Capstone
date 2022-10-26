import React from 'react';
import {PropTypes} from 'prop-types'
import { RelatedCardGraphic, TextOnCard, ImageOnCard, AddCardBtn, OutfitCardGraphic, BtnContainer, OuterBtnDiv } from './Assets/comparisonWidget.style.js';
import { AiOutlineStar } from 'react-icons/ai';

const OutfitInfo = function ({data}) {

  return (
  <OutfitCardGraphic data-testid="cardOne">
    <ImageOnCard image={data.url} />
    <TextOnCard>
      <p>
        {data.category}
        {' '}
        <br />
        {data.name}
        {' '}
        <br />
        {data.price}
      </p>
      <div>
      <AiOutlineStar /> <AiOutlineStar /> <AiOutlineStar /> <AiOutlineStar /> <AiOutlineStar />
      </div>
    </TextOnCard>
  </OutfitCardGraphic>
)
};

//please review this proptype
OutfitInfo.propTypes = {

  data: PropTypes.object,

}

export default OutfitInfo;
