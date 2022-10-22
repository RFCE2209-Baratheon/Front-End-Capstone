/* eslint-disable react/jsx-key */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import axios from 'axios';
import StarRatingStaticSummary from './StarRatingStaticSummary.jsx';
import Bar from './Bar.jsx';
import ProductBreakDown from './ProductBreakDown.jsx';

const Container = styled.div`{
  border: solid;
  border-radius: 20px;
  padding: 10px;
}`;

const SummaryContainer = styled.div`{
  border:solid;
  borer-radius: 20px;
  padding: 10px;
}`;

const BreakDown = styled.div`{
  border:solid;
  borer-radius: 20px;
  padding: 10px;
}`;

function RatingSummary({ product }) {
  // need to pass data down for overall rating - will update this with axios call in reviews
  const [average, setAverage] = useState(0);
  const [totalReviews, setTotalReviews] = useState(0);
  const [ratings, setRatings] = useState([]);
  const [metaData, setMetaData] = useState([]);

  const calculateAverage = () => {
    const { ratings } = metaData;
    let sum = 0;
    for (const rating in ratings) {
      sum += Number(ratings[rating]);
    }
    setTotalReviews(sum);
    const rawAverage = sum / 5;
    const calculatedAverage = Math.round(rawAverage * 10) / 10;
    setAverage(calculatedAverage);
  };

  const getMetaData = () => {
    axios.get('/reviews/meta', { params: { product_id: product.id } })
      .then(getMetaSuccess)
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getMetaData();
  }, []);

  const getMetaSuccess = (response) => {
    setMetaData(response.data);
  };

  useEffect(() => {
    calculateAverage();
  }, [metaData]);

  if (metaData.length === 0) {
    return null;
  }
  return (
    <Container>
      <h1>{average}</h1>
      <StarRatingStaticSummary rating={3} />
      <p>{`Based on a total of ${totalReviews} reviews!`}</p>
      <h3>Rating Summary</h3>
      <SummaryContainer>
        {Object.keys(metaData.ratings).sort().reverse().map((rating, index) => (
          <p style={{ whiteSpace: 'nowrap' }}>
            {`${rating} stars`}
            <Bar style={{ display: 'inline-block' }} sum={totalReviews} rating={metaData.ratings[rating]} />
          </p>
        ))}
      </SummaryContainer>
      <h3>Product Breakdown</h3>
      <BreakDown>
        {Object.keys(metaData.characteristics).map((characteristic) => (
          <p>
            <ProductBreakDown
              characteristic={characteristic}
              value={metaData.characteristics[characteristic]}
            />
          </p>
        ))}
      </BreakDown>
    </Container>
  );
}

export default RatingSummary;
