import React, {useState, useEffect} from 'react';
import ReviewList from './ReviewList.jsx';
import RatingSummary from './RatingSummary.jsx';
;

const Review = (props) => {

  return (
    <>
    <ReviewList />
    <RatingSummary />
    </>
  )
}


export default Review;