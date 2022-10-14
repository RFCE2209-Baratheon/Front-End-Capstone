import React, { useEffect, useState } from 'react';
import ReviewListTile from './ReviewListTile.jsx';

function ReviewList({ product }) {
  return (
    <>
      <div>ReviewList</div>
      <ReviewListTile product={product} />
    </>
  );
}

export default ReviewList;
