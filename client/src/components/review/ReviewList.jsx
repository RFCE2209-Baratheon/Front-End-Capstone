/* eslint-disable react/self-closing-comp */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import axios from 'axios';
import ReviewListTile from './ReviewListTile.jsx';
import { DropDown, Option } from './DropDown.jsx';
import AddReviewForm from './AddReviewForm.jsx';

const Container = styled.div`{
  test-align: center;
  border: solid;
  border-width: 1px;
  border-color: #62929E;
  padding: 10px;
  border-radius: 20px;
  margin: 32px;
  overflow-x: hidden;
  overflow-y: auto;
}`;

const SelectButton = styled.button`{
  font-size: 1.5em;
  background-color: white;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #62929E;
  border-radius: 50px;
  box-shadow: 5px 5px 10px;
  &:hover {
    background-color:  #546A7B
  }
}`;

const Menu = styled.ul`{
  position: absolute;
  list-style-type: none;
  margin: 5px 0;
  padding: 0;
  border: 1px solid grey;
  width: 150px;
}`;

const List = styled.li`{
  margin: 0;
  background-color: white;
}`;

const ListButton = styled.button`{
  width: 100px;
  height: 100%;
  text-align: left;
  background: none;
  color: inherit;
  border: none;
  padding: 5px;
  margin: 0;
  font: inherit;
  cursor: pointer;
}`;

const ScrollDiv = styled.div`{
  max-height: 850px;
  overflow: scroll;
  // border: solid;
  border-radius: 10px;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 10px;
    background: transparent;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    border: 1px solid #808080;
    background: white;
    border-radius: 10px;
    width: 10px;

}`;

const ReviewList = ({
  product, reviews, setReviews, allReviews, setAllReviews, metaData,
}) => {
  const [moreReviewsButton, setMoreReviewsButton] = useState(false);
  const [reviewListIndex, setReviewListIndex] = useState(1);
  const [dropOpen, setDropOpen] = useState(false);
  const [addReviewToggle, setAddReviewToggle] = useState(false);

  useEffect(() => {
    getReviews('relevant');
  }, []);

  useEffect(() => {
    setReviewListIndex(1);
  }, [allReviews]);

  const getReviews = (sortParameter) => {
    axios.get('/reviews/', { params: { product_id: product.id, sort: sortParameter } })
      .then(getReviewSuccess)
      .catch((err) => {
        console.log(err);
      });
  };

  let getReviewSuccess = (response) => {
    const { results } = response.data;
    setAllReviews(results);
    if (results.length > 2) {
      setMoreReviewsButton(true);
    }
    const reviewList = results.slice(0, reviewListIndex + 1);
    setReviews(reviewList);
    const newIndex = reviewListIndex + 2;
    setReviewListIndex(newIndex);
  };

  const expandReviews = () => {
    console.log('clicked')
    const reviewList = allReviews.slice(0, reviewListIndex + 1);
    const newIndex = reviewListIndex + 2;
    setReviewListIndex(newIndex);
    setReviews(reviewList);
    if (reviewListIndex + 1 > allReviews.length) {
      setMoreReviewsButton(false);
    }
  };

  const handleDropOpen = () => {
    setDropOpen(!dropOpen);
  };

  const handleSelect = (e) => {
    getReviews(e.target.value);
  };

  const addReviewHandler = () => {
    setAddReviewToggle(!addReviewToggle);
  };

  if (metaData.length === 0) {
    return null;
  }

  return (
    <>
    <div style={{display:"inherit"}}>
      <div style={{height:"100px"}}></div>
      <Container>
        <div data-testid="reviewlist-1">
          {allReviews.length}
          {' '}
          reviews for this product, sorted by
          <DropDown handleSelect={handleSelect} />
        </div>
        <ScrollDiv>
          {' '}
          {reviews.map((review, index) => (
            <ReviewListTile
              metaData={metaData}
              key={index}
              review={review}
            />
          ))}
        </ScrollDiv>
      </Container>
      <div>
      {moreReviewsButton
      && <SelectButton onClick={expandReviews}>More Reviews</SelectButton>}
      <SelectButton onClick={addReviewHandler}>Add a Review</SelectButton>
      </div>
      {addReviewToggle
       && (
       <AddReviewForm
         metaData={metaData}
         addReviewToggle={addReviewToggle}
         setAddReviewToggle={setAddReviewToggle}
         productName={product.name}
         productId={product.id}
       >
       </AddReviewForm>

       )}
    </div>
    </>
  );
};

export default ReviewList;
