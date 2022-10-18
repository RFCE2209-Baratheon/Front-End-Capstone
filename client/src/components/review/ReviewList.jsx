/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import axios from 'axios';
import ReviewListTile from './ReviewListTile.jsx';

const Container = styled.div`{
  test-align: center;
  border: solid;
  padding: 10px;
  border-radius: 20px;
  margin: 32px;
}`;

const MoreReviewButton = styled.button`{
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

const ReviewList = ({ product }) => {
  const [allReviews, setAllReviews] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [moreReviewsButton, setMoreReviewsButton] = useState(false);
  const [reviewListIndex, setReviewListIndex] = useState(1);
  const [dropOpen, setDropOpen] = useState(false);

  useEffect(() => {
    getReviews('relevant');
  }, []);

  const getReviews = (sortParameter) => {
    axios.get('/reviews/', { params: { product_id: 37311, sort: sortParameter } })
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

  const handleSortReviews = (sortParameter) => {
    setAllReviews([]);
    setReviews([]);
    console.log('REVIEWS', allReviews);
    getReviews(sortParameter);
  };

  return (
    <>
      <Container>
        <div data-testid="reviewlist-1">
          {allReviews.length}
          {' '}
          reviews, sorted by _____
          <button style={{ textDecoration: 'underline', color: 'blue' }} onClick={handleDropOpen}>Select Sorting Preference</button>
          {dropOpen && (
          <Menu>
            <List><ListButton onClick={() => { handleSortReviews('Newest'); }}>Newest</ListButton></List>
            <List><ListButton onClick={() => { handleSortReviews('Helpful'); }}>Helpful</ListButton></List>
            <List><ListButton onClick={() => { handleSortReviews('Relevant'); }}>Relevant</ListButton></List>
          </Menu>
          )}
        </div>
        <div>
          {' '}
          {reviews.map((review) => (<ReviewListTile key={review.id} review={review} />))}
        </div>
      </Container>
      {moreReviewsButton
      && <MoreReviewButton onClick={() => { expandReviews(); }}>More Reviews</MoreReviewButton>}
    </>
  );
};

export default ReviewList;
