/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/function-component-definition */
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

const RatingSummary = ({
  product, allReviews, setAllReviews, reviews, setReviews, metaData, setMetaData,
}) => {
  // need to pass data down for overall rating - will update this with axios call in reviews
  const [average, setAverage] = useState(0);
  const [totalReviews, setTotalReviews] = useState(0);
  // const [ratings, setRatings] = useState([]);
  // const [metaData, setMetaData] = useState([]);
  const [toggleFilter, setToggleFilter] = useState({
    1: false, 2: false, 3: false, 4: false, 5: false,
  });
  const [clearFilters, setClearFilters] = useState(false);

  const calculateAverage = () => {
    const { ratings } = metaData;
    let sum = 0;
    let sumFormula = 0;
    for (const rating in ratings) {
      sumFormula += rating * ratings[rating];
      sum += Number(ratings[rating]);
    }
    setAverage(sumFormula / sum);
    setTotalReviews(sum);
    const calculatedAverage = Math.round((sumFormula / sum));
    setAverage(calculatedAverage);
  };

  useEffect(() => {
    calculateAverage();
  }, [metaData]);

  const handleFilter = (rating) => {
    const results = allReviews.filter((review) => JSON.stringify(review.rating) === rating);
    setReviews(results);
    const tempObj = { ...toggleFilter };
    tempObj[rating] = !tempObj[rating];
    if (tempObj[rating]) {
      setClearFilters(true);
    }
    if (!tempObj[rating]) {
      setClearFilters(false);
    }
    setToggleFilter(tempObj);
  };

  const resetFilters = () => {
    console.log('click');
    setToggleFilter({
      1: false, 2: false, 3: false, 4: false, 5: false,
    });
    setReviews(allReviews);
    setClearFilters(!clearFilters);
  };

  if (metaData.length === 0) {
    return null;
  }
  if (average === 0) {
    return null;
  }
  return (
    <Container>
      <h1>
        Average Rating
        {' '}
        {average}
      </h1>
      <StarRatingStaticSummary rating={average} />
      <p>{`Based on a total of ${totalReviews} reviews!`}</p>
      <h3>Rating Summary</h3>
      {clearFilters
      && <p onClick={() => { resetFilters(); }} style={{ color: 'blue', textDecoration: 'underline' }}>Click to clear all filters.</p>}
      <SummaryContainer>
        {Object.keys(metaData.ratings).sort().reverse().map((rating) => (
          <p onClick={(e) => { handleFilter(rating); }} style={{ whiteSpace: 'nowrap' }}>
            {`${rating} stars`}
            <Bar style={{ display: 'inline-block' }} star={rating} toggle={toggleFilter[rating]} sum={totalReviews} rating={metaData.ratings[rating]} />
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
};

export default RatingSummary;
