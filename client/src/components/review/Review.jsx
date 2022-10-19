/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import ReviewList from './ReviewList.jsx';
import RatingSummary from './RatingSummary.jsx';
import review from '../../example_data/getReviewById.js';

function Review({ product }) {
  // const [product, setProduct] = useState(review);

  const tempProduct = {
    id: 37311,
    campus: 'hr-rfe',
    name: 'Camo Onesie',
    slogan: 'Blend in to your crowd',
    description: 'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
    category: 'Jackets',
    default_price: '140.00',
    created_at: '2021-08-13T14:37:33.145Z',
    updated_at: '2021-08-13T14:37:33.145Z',
  };

  return (
    <>
      <ReviewList product={tempProduct} />
      <RatingSummary product={tempProduct} />
    </>
  );
}

export default Review;
