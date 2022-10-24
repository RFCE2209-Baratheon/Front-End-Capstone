/* eslint-disable react/function-component-definition */
import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const Bar = ({
  rating, sum, toggle, star,
}) => (
  <div>
    <progress style={{ backgroundColor: 'lightblue', display: 'inline-block' }} value={(rating / sum) * 100} max="100" />
    <p style={{ display: 'inline-block' }}>
      {`(${rating})`}
      {' '}
    </p>
    {toggle
      && <p>{`Filtered by ${star} stars`}</p>}
  </div>
);

export default Bar;
