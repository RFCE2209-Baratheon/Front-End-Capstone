/* eslint-disable import/extensions */
import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import  checkMark   from '../../assets/checkmark.png'
import { FcCheckmark } from 'react-icons/fc';
import { parseISO, format } from 'date-fns';
import ReviewListBody from './ReviewListBody.jsx';
import StarRatingStatic from './StarRatingStatic.jsx';
import Helpfulness from './Helpfulness.jsx';
// import StarRating from './StarRating.jsx';
// import Rating from './newStar.jsx';

const Container = styled.div`{
  test-align: center;
  border: solid;
  border-width: 1px;
  border-color: #62929E;
  padding: 10px;
  border-radius: 20px;
  margin: 32px;
}`;

const Summary = styled.p`{
  font-weight: bold;
}`;

const Response = styled.div`{
  border : solid;
  background-color: AliceBlue;
  border-radius: 20px;
  padding: 10px;
}`;

function ReviewListTile({ review, metaData }) {

  return (
    <Container data-testid="reviewlisttile-1">
      <p>{review.rating}</p>
      <StarRatingStatic rating={review.rating} review={review} />
      <div style={{ whiteSpace: 'nowrap' }}>
        {`Verified User ${review.reviewer_name} ${format(parseISO(`${review.date}`), ' MMMM d, yyyy ')} `}
        {/* <p style={{ display: 'inline-block' }}>

        </p> */}
      </div>
      <Summary>{review.summary.slice(0, 60)}</Summary>
      <ReviewListBody review={review} />
      {(review.recommend
        && (
        <p>
          Recommended
          <span><img style={{width:"30px", height: "30px"}} src={checkMark}/></span>
        </p>
        )
      )}
      {review.response !== null
      && (
      <Response>
        Response from seller:
        <p>{review.response}</p>
      </Response>
      )}
      <Helpfulness review={review} help={review.helpfulness} metaData={metaData} />
    </Container>
  );
}

export default ReviewListTile;
