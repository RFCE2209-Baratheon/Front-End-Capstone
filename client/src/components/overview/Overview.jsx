import React, {useState, useEffect} from 'react';
import ProductInformation from './ProductInformation.jsx';
import ImageGallery from './ImageGallery.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';
import exampleProductData from '../../example_data/get_all_products.js';
import exampleStyleData from '../../example_data/get_styles.js';

const Overview = (props) => {
  const [productData, setProductData] = useState(exampleProductData);
  const [productId, setProductId] = useState(productData[0].id);

  const [styleData, setStyleData] = useState(exampleStyleData);
  const [styleId, setStyleId] = useState(styleData.results[0].style_id);

  console.log('productData: ', productData);
  console.log('productId: ', productId);
  console.log('styleData: ', styleData);
  console.log('styleId: ', styleId);


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