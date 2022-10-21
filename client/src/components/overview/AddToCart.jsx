import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const AddToCartButton = styled.button`
  background-color: white;
  font-family: Monospace;
`

const AddToCart = ({ currentStyleSkus }) => {
  const [size, setSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  let list = false;
  var mappedSizeOptions = Object.keys(currentStyleSkus).map((sku, index) => {
    list = true;
    return <option key={index}>{currentStyleSkus[sku].size}</option>}
  )

  var mappedQtyOptions;

  useEffect(() => {
    Object.keys(currentStyleSkus).forEach((sku, index) =>
      {if (currentStyleSkus[sku].size === size) {
        setQuantity(currentStyleSkus[sku].quantity)
      }
    });
  }, [size]);

  if (quantity > 0) {
    var max = quantity > 15 ? 15 : quantity;
    var quantityOptions = [];
    for (let i = 2; i < max + 1; i++) {
      quantityOptions.push(i);
    }
    mappedQtyOptions = quantityOptions.map((num, i) =>
      <option key={i}>{num}</option>
    )
  }
  let [sizeSelected, setSizeSelected] = useState(false);

  const onButtonClick = () => {
    // api call: add to cart
  }

  return (
    <>
      <select value={size} name="size" onChange={(e) => {
        setSize(e.target.value);
        setSizeSelected(true);
        }}>
        <option value="select">select size</option>
          {list ? mappedSizeOptions : null}
      </select>
      <select name="quantity">
        {sizeSelected && quantity > 0 ? <option value="select">1</option> : <option value="select">-</option> }
        {quantity > 0 ? mappedQtyOptions : <option>OUT OF STOCK</option>}
      </select>
      <p>
      {quantity > 0 && <AddToCartButton onClick={onButtonClick}>ADD TO BAG +</AddToCartButton>}
      </p>
    </>
  )
}

export default AddToCart;