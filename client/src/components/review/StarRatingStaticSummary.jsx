import React, { useState, useEffect } from 'react';

function StarRatingStaticSummary({rating},{product}) {
  const [avgRating, setRating] = useState(rating);

  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= avgRating ? 'on' : 'off'}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
}

export default StarRatingStaticSummary;
