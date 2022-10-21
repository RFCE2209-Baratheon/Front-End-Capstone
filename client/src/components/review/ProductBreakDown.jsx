/* eslint-disable react/function-component-definition */
import React from 'react';
import styled, { css } from 'styled-components';

const Bar = styled.input`{
  width: 300px;

}`;

const List = styled.datalist`{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  writing-mode: vertical-lr;
  width: 300px;

}`;

const ProductBreakDown = ({ characteristic, value }) => (
  <>
    <Bar list="tickmarks" name="char" min="0" max="100" value={value.value * 10} step="0" type="range" />
    <label htmlFor="char">{characteristic}</label>
    <List id="tickmarks">
      <option value="0" label="poor" />
      <option value="25" label="not poor" />
      <option value="50" label="perfect" />
      <option value="75" label="over perfect" />
      <option value="100" label="well done" />
    </List>
  </>
);

export default ProductBreakDown;
