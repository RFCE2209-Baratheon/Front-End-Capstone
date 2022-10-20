import React, { useState } from 'react';

function StarRating({setRating, rating}) {
  // const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [ratingDescription, setRatingDescription] = useState(['', 'Poor', 'Fair', 'Average', 'Good', 'Great']);

  console.log(ratingDescription[hover])
  return (
    <div style={{ whiteSpace: 'nowrap' }} className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? 'on' : 'off'}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
      <p style={{ display: 'inline-block' }}>{`${ratingDescription[hover]}`}</p>
    </div>
  );
}

export default StarRating;
