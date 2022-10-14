import React, {useEffect, useState} from 'react';
import StarRating from './StarRating.jsx';
import StarRatingStatic from './StarRatingStatic.jsx';


const ReviewListTile = ({product}) => {
  return (
    <>
    <div>ReviewList Tile</div>
    <StarRatingStatic product = {product}/>
    <p>Date of Review</p>
    <p>Review Summary</p>
    <p>Review Body</p>
    <p>Recommended</p>
    <p>Reviewer Name</p>
    <p>Response to Review</p>
    <p>Rating Helpfulness</p>

    </>
  )
};

export default ReviewListTile;