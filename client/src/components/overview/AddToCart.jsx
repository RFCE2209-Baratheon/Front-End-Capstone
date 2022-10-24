import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const AddToCartButton = styled.button`
  background-color: white;
  font-family: monospace;
`

const AddToCart = ({ currentStyleSkus }) => {
  const [size, setSize] = useState('');
  const [sizeSelected, setSizeSelected] = useState(false);
  const [maxQuantity, setMaxQuantity] = useState(1);
  const [quantity, setQuantity] = useState(1);
  var mappedQtyOptions;

  var mappedSizeOptions = Object.keys(currentStyleSkus).map((sku, index) => {
    if (currentStyleSkus[sku].quantity > 0) {
      return <option key={index}>{currentStyleSkus[sku].size}</option>}
    }
  )

  useEffect(() => {
    Object.keys(currentStyleSkus).forEach((sku, index) =>
      {if (currentStyleSkus[sku].size === size) {
        setMaxQuantity(currentStyleSkus[sku].quantity)
      }
    });
  }, [size]);

  if (maxQuantity > 0) {
    var max = maxQuantity > 15 ? 15 : maxQuantity;
    var quantityOptions = [];
    for (let i = 2; i < max + 1; i++) {
      quantityOptions.push(i);
    }
    mappedQtyOptions = quantityOptions.map((num, i) =>
      <option key={i}>{num}</option>
    )
  }

  const onButtonClick = () => {
    var sku_id;
    Object.keys(currentStyleSkus).forEach((sku, index) => {
      if (currentStyleSkus[sku].quantity >= quantity && currentStyleSkus[sku].size === size) {
        sku_id = sku;
      }
    })
    axios.post('/cart', {sku_id: sku_id})
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log('error, could not add item to cart. error: ', error)
      });
  }

  return (
    <> {mappedSizeOptions[0] ?
        <>
          <select value={size} name="size" onChange={(e) => {
            setSize(e.target.value);
            setSizeSelected(true);
            }}>
            <option value="select">select size</option> {mappedSizeOptions}
          </select>

          <select name="quantity" onChange={(e) => {
            setQuantity(e.target.value);
            }}>
            { sizeSelected && maxQuantity > 0 ? <> <option value="select">1</option> {mappedQtyOptions} </> : <option value="select">-</option> }
          </select>

          <p>
            {maxQuantity > 0 && <AddToCartButton onClick={onButtonClick}>ADD TO BAG +</AddToCartButton>}
          </p>
        </> : <div>OUT OF STOCK</div> }
    </>
  )
}

export default AddToCart;