/* eslint-disable react/function-component-definition */
import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const ProgressBar = styled.progress`{
  background: green;
  border-radius: 20px;
}`;

const Bar = ({ rating, sum }) => (
  <div>
    <ProgressBar style={{ display: 'inline-block' }} value={(rating / sum) * 100} max="100" />
    <p style={{ display: 'inline-block' }}>
      {`(${rating})`}
      {' '}
    </p>
  </div>
);

export default Bar;
