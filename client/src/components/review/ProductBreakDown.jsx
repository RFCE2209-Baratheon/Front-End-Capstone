/* eslint-disable react/function-component-definition */
import React, { useState, useEffect } from 'react';
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

const ProductBreakDown = ({ characteristic, value }) => {
  const Width = ['none selected', 'Too Narrow', 'Slightly Narrow', 'Perfect', 'Slightly Wide', 'Too Wide'];
  const Comfort = ['none selected', 'Uncomfortable', 'Slightly Uncomfortable', 'Ok', 'Comfortable', 'Perfect'];
  const Quality = ['none selected', 'Poor', 'Below Average', 'What I Expected', 'Pretty Great', 'Perfect'];
  const Length = ['none selected', 'Runs Short', 'Runs Slightly Short', 'Perfect', 'Runs Slightly Long', 'Runs Long'];
  const Size = ['none selected', 'A Size Too Small', '1/2 a Size Too Small', 'Perfect', '1/2 a Size Too Big', 'A Size Too Wide'];
  const Fit = ['none selected', 'Runs Tight', 'Runs Slightly Tight', 'Perfect', 'Runs Slightly Long', 'Runs Long'];
  const [characteristicArray, setCharacteristicArray] = useState([]);

  useEffect(() => {
    if (characteristic === 'Fit') {
      setCharacteristicArray(Fit);
    }
    if (characteristic === 'Width') {
      setCharacteristicArray(Width);
    }
    if (characteristic === 'Comfort') {
      setCharacteristicArray(Comfort);
    }
    if (characteristic === 'Quality') {
      setCharacteristicArray(Quality);
    }
    if (characteristic === 'Length') {
      setCharacteristicArray(Length);
    }
    if (characteristic === 'Size') {
      setCharacteristicArray(Size);
    }
  }, []);

  return (
    <>
      <Bar list="tickmarks" name="char" min="0" max="100" value={value.value * 10} step="0" type="range" />
      <label htmlFor="char">{characteristic}</label>
      <List id="tickmarks">
        <option value="0" label={characteristicArray[0]} />
        <option value="25" label={characteristicArray[1]} />
        <option value="50" label={characteristicArray[2]} />
        <option value="75" label={characteristicArray[3]} />
        <option value="100" label={characteristicArray[4]} />
      </List>
    </>
  );
};

export default ProductBreakDown;
