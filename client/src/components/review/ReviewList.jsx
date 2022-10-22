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
  padding: 10px;
  border-radius: 20px;
  margin: 32px;
  overflow-x: hidden;
  overflow-y: auto;
}`;

const SelectButton = styled.button`{
  color: palevioletred;
  font-size: 1.5em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid black;
  border-radius: 3px;
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
  width: 100%;
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
  max-height: 1400px;
  overflow: scroll;
  // border: solid;
  border-radius: 10px;

}`;

const ReviewList = ({
  product, reviews, setReviews, allReviews, setAllReviews, metaData,
}) => {
  // const [allReviews, setAllReviews] = useState([]);
  // const [reviews, setReviews] = useState([]);
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
    if (reviewListIndex + 1 > allReviews.length) {
      setMoreReviewsButton(false);
    }
    const reviewList = allReviews.slice(0, reviewListIndex + 1);
    setReviews(reviewList);
    const newIndex = reviewListIndex + 2;
    setReviewListIndex(newIndex);
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
    <div>
      <Container>
        <div data-testid="reviewlist-1">
          {allReviews.length}
          {' '}
          reviews for this product, sorted by
          <DropDown handleSelect={handleSelect} />
        </div>
        <ScrollDiv>
          {' '}
          {reviews.map((review) => (<ReviewListTile key={review.id} review={review} />))}
        </ScrollDiv>
      </Container>
      {moreReviewsButton
      && <SelectButton onClick={() => { expandReviews(); }}>More Reviews</SelectButton>}
      <SelectButton onClick={addReviewHandler}>Add a Review</SelectButton>
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
  );
};

export default ReviewList;
