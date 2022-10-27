/* eslint-disable import/extensions */
import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import  checkMark   from '../../assets/checkmark.png'
import { parseISO, format } from 'date-fns';
import { GoVerified } from '@react-icons/all-files/go/GoVerified';
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
      <StarRatingStatic rating={review.rating} review={review} />
      <div style={{ textAlign:"right", whiteSpace: 'nowrap' }}>
        <GoVerified style={{color:"green"}}/> <span><b>{review.reviewer_name}</b> {`,${format(parseISO(review.date), ' MMMM d, yyyy ')}`}</span>

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
