/* eslint-disable import/extensions */
import React, { useEffect, useState } from 'react';
import styled, {css} from 'styled-components';
import ReviewListBody from './ReviewListBody.jsx';
import StarRatingStatic from './StarRatingStatic.jsx';
import Helpfulness from './Helpfulness.jsx';
// import StarRating from './StarRating.jsx';
// import Rating from './newStar.jsx';
import {FcCheckmark} from 'react-icons/fc';

const Container = styled.div`{
  test-align: center;
  border: solid;
  padding: 10px;
  border-radius: 20px;
  margin: 32px;
}`

const Summary = styled.p`{
  font-weight: bold;
}`

const Response = styled.div`{
  border : solid;
  background-color: AliceBlue;
  border-radius: 20px;
  padding: 10px;
}`



function ReviewListTile({review}) {

  let dateString = JSON.stringify(review.date.slice(0,10));

  return (
    <>
    <Container>
      <StarRatingStatic rating = {review.rating} review = {review}/>
      <p style = {{whiteSpace : "nowrap"}}>{`Verified User ${review.reviewer_name}`}
        <p style = {{display : "inline-block"}}>{dateString}
        </p>
      </p>
      <Summary>{review.summary.slice(0, 60)}</Summary>
      <ReviewListBody review = {review}></ReviewListBody>
      {(review.recommend &&
        <p>Recommended<FcCheckmark></FcCheckmark></p>
      )}
      {review.response !== null &&
      <Response>Response from seller:
        <p>{review.response}</p>
      </Response>
      }
      <Helpfulness help = {review.helpfulness}></Helpfulness>
      </Container>
    </>
  );
}

export default ReviewListTile;
