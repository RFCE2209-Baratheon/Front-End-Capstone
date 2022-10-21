/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled, { css } from 'styled-components';
import ReviewList from './ReviewList.jsx';
import RatingSummary from './RatingSummary.jsx';

const Container = styled.div`{
  display: grid;
  grid-template-columns: auto auto;
  padding: 10px;
}`;

const Title = styled.h1`{
  text-align: center
}`;

function Review({ productId }) {
  const [product, setProduct] = useState(tempProduct);
  const [metaData, setMetaData] = useState({});

  const tempProduct = {
    id: 37311,
    campus: 'hr-rfe',
    name: 'Camo Onesie',
    slogan: 'Blend in to your crowd',
    description: 'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
    category: 'Jackets',
    default_price: '140.00',
    created_at: '2021-08-13T14:37:33.145Z',
    updated_at: '2021-08-13T14:37:33.145Z',
  };

  // const getMetaData = () => {
  //   axios.get('/reviews/meta', { params: { product_id: tempProduct.id } })
  //     .then(getMetaSucces)
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // useEffect(() => {
  //   getMetaData();
  // }, []);

  // const getMetaSucces = (response) => {
  //   setMetaData(response);
  // };

  return (
    <>
      <Title>Ratings & Reviews</Title>
      <Container>
        <RatingSummary metaData={metaData} product={tempProduct} />
        <ReviewList metaData={metaData} product={tempProduct} />
      </Container>
    </>
  );
}

export default Review;
