/* eslint-disable react/function-component-definition */
import React, { useState } from 'react';

const CharacteristicRating = ({ type, setFunc, widthRatings }) => (
  <div onChange={(e) => { setFunc(e.target.value); }}>
    <p style={{ display: 'inline-block' }}>{`Please rate the ${type}`}</p>
    <input type="radio" value="1" />
    1
    <input type="radio" value="2" />
    2
    <input type="radio" value="3" />
    3
    <input type="radio" value="4" />
    4
    <input type="radio" value="5" />
    5
  </div>
);

export default CharacteristicRating;
