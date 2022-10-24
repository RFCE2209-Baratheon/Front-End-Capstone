/* eslint-disable react/function-component-definition */
import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const Bar = ({
  rating, sum, toggle, star,
}) => (
  <div>
    <progress style={{backgroundColor:"red"}} value={(rating / sum) * 100} max="100" />
    <div style={{ display: 'inline-block' }}>
      {`(${rating})`}
      {' '}
    </div>
    {toggle
      && <p>{`Filtered by ${star} stars`}</p>}
  </div>
);

export default Bar;
