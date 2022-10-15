import React, { useState, useEffect } from 'react';
import ProductInformation from './ProductInformation.jsx';
import ImageGallery from './ImageGallery.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';
import exampleProductData from '../../example_data/get_all_products.js';
import exampleStyleData from '../../example_data/get_styles.js';
import exampleReviews from '../../example_data/get_reviews.js';
import './assets/styles.css';

const Overview = () => {
  const [productData, setProductData] = useState(exampleProductData[0]);
  const [productId, setProductId] = useState(productData.id);

  const [styleData, setStyleData] = useState(exampleStyleData.results[0]);
  const [styleId, setStyleId] = useState(styleData.style_id);

  const [reviewData, setReviewData] = useState(exampleReviews);

  const [styleImages, setStyleImages] = useState(exampleStyleData.results[0].photos);

  console.log('productData: ', productData);
  console.log('productId: ', productId);
  console.log('styleData: ', styleData);
  console.log('styleId: ', styleId);

  return (
    <>
      <h1>Overview</h1>
      <ImageGallery styleImages={styleImages} />
      <ProductInformation productData={productData} productId={productId} styleData={styleData} styleId={styleId}
      reviewData={reviewData}/>
      <StyleSelector />
      <AddToCart />
    </>
  );
}

export default Overview;
