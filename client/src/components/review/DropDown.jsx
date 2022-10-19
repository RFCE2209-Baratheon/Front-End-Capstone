/* eslint-disable react/function-component-definition */
import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

const DropdownWrapper = styled.form`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
`;

const StyledSelect = styled.select`
  max-width: 50%;
  height: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
`;

const StyledOption = styled.option`
  color: ${(props) => (props.selected ? 'lightgrey' : 'black')};
`;

const StyledLabel = styled.label`
  margin-bottom: 1rem;
`;

const StyledButton = styled.input`
  max-width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  border: solid 2px blue;
  padding: 0.5rem;
  border-radius: 1rem;
`;
export const DropDown = ({handleSelect}) => (
  <select onChange={handleSelect}>
    <option value="Relevant">Relevance</option>
    <option value="Newest">Newest</option>
    <option value="Helpful">Helpfulness</option>
  </select>
);

export const Option = (props) => (
  <StyledOption selected={props.selected}>
    {props.value}
  </StyledOption>
);
