import React, {useState, useEffect} from 'react';
import ProductInformation from './ProductInformation.jsx';
import ImageGallery from './ImageGallery.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';
import exampleProductData from '../../example_data/get_all_products.js';

const Overview = (props) => {
  const [productData, setProductData] = useState(exampleProductData);
  const [productId, setProductId] = useState(productData[0].id);

  console.log('productData: ', productData);
  console.log('productId: ', productId);

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