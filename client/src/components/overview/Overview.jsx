import React, {useState, useEffect} from 'react';
import ProductInformation from './ProductInformation.jsx';
import ImageGallery from './ImageGallery.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';
import productData from '../../example_data/get_all_products.js';

const Overview = (props) => {
  const [productData, setProductData] = useState(productData);

  return (
   <>
    <h1>Overview</h1>
    <ImageGallery />
    <ProductInformation />
    <StyleSelector />
    <AddToCart />
   </>
  )
}

export default Overview;