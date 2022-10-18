import React, { useEffect, useState } from 'react';
import ReviewListTile from './ReviewListTile.jsx';
import styled, {css} from 'styled-components';
import axios from 'axios';


const Container = styled.div`{
  test-align: center;
  border: solid;
  padding: 10px;
  border-radius: 20px;
  margin: 32px;
}`

const MoreReviewButton = styled.button`{
  color: palevioletred;
  font-size: 1.5em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid black;
  border-radius: 3px;
}`

const ReviewList = ({ product }) => {

  const [allReviews, setAllReviews] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [moreReviewsButton, setMoreReviewsButton] = useState(false);
  const [reviewListLength, setReviewListLength] = useState(allReviews.length);
  const [reviewListIndex, setReviewListIndex] = useState(1);

  let getAllReviews = () => {
    axios.get('/reviews/', {params : {product_id : 37311}})
    .then(getReviewSuccess)
    .catch((err) => {
      console.log(err)
    })
  };

  useEffect(()=>{
    getAllReviews();
  },[]);

  let getReviewSuccess = (response) => {
    console.log('get response', response.data.results)
      let results = response.data.results;
      setAllReviews(results)
      if (results.length > 2){
        setMoreReviewsButton(true);
      }
      let reviewList = results.slice(0, reviewListIndex + 1);
      setReviews(reviewList);
      let newIndex = reviewListIndex + 2;
      setReviewListIndex(newIndex);
      //setInitialReviews(response.data.results)
  };

  let expandReviews = () => {
    console.log('index', reviewListIndex, 'length', allReviews.length)
    if (reviewListIndex + 1 > allReviews.length) {
      setMoreReviewsButton(false);
    }
    let reviewList = allReviews.slice(0, reviewListIndex + 1);
    setReviews(reviewList);
    let newIndex = reviewListIndex + 2;
    setReviewListIndex(newIndex);
  };

  return (
    <>
    <Container>
      <div>{allReviews.length} reviews, sorted by _____</div>
      <div> {reviews.map((review) =>{
        return (<ReviewListTile key={review.id} review={review} />)
      })}
      </div>
      </Container>
      {moreReviewsButton &&
      <MoreReviewButton onClick = {()=>{expandReviews()}}>More Reviews</MoreReviewButton>
      }
    </>
  );
}

export default ReviewList;
