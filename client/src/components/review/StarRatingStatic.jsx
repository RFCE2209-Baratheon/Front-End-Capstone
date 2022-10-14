import React, { useState, useEffect } from 'react';

function StarRatingStatic({ product }) {
  const [rating, setRating] = useState(0);

  const getAverageRating = (product) => {
    let sum = 0;
    product.results.forEach((review) => {
      sum += review.rating;
    });
    const average = sum / product.results.length;
    // need to round to closest 1/4 point still
    setRating(average);
  };

  useEffect(() => {
    getAverageRating(product);
  }, []);

  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= rating ? 'on' : 'off'}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
}

export default StarRatingStatic;
