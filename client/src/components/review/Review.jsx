import React, {useState, useEffect} from 'react';
import ReviewList from './ReviewList.jsx';
import RatingSummary from './RatingSummary.jsx';
import review from '../../example_data/getReviewById.js';

const Review = (props) => {
  const [product, setProduct] = useState(review);

  return (
    <>
    <ReviewList product = {product} />
    <RatingSummary product = {product}/>
    </>
  )
}


export default Review;