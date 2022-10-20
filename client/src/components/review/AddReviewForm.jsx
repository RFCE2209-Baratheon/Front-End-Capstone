/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import StarRating from './StarRating.jsx';
import Characteristics from './Characteristics.jsx';

const ModalBackground = styled.div`{
  width: 100%;
  height: 100%;
  background-color: black;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
}`;

const ModalContainer = styled.div`{
  width: 500px;
  height: 800px;
  border-radius: 12px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  padding: 25px;
  overflow: scroll;
}`;

const InputBody = styled.input`{
   height: 50px;
   width: 100%;
}`;

const SelectButton = styled.button`{
  color: palevioletred;
  font-size: 1.5em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid black;
  border-radius: 3px;
}`;

const metaData = {
  product_id: '37315',
  ratings: {
    1: '33',
    2: '7',
    3: '20',
    4: '14',
    5: '20',
  },
  recommended: {
    false: '40',
    true: '54',
  },
  characteristics: {
    Size: {
      id: 125044,
      value: '2.7454545454545455',
    },
    Width: {
      id: 125045,
      value: '2.9642857142857143',
    },
    Comfort: {
      id: 125046,
      value: '3.1960784313725490',
    },
    Quality: {
      id: 125047,
      value: '3.0784313725490196',
    },
  },
};

const AddReviewForm = ({
  setAddReviewToggle, addReviewToggle, productName, productId,
}) => {
  const [width, setWidth] = useState(0);
  const [comfort, setComfort] = useState(0);
  const [quality, setQuality] = useState(0);
  const [length, setLength] = useState(0);
  const [size, setSize] = useState(0);
  const [fit, setFit] = useState(0);
  const [summaryText, setSummaryText] = useState('');
  const [body, setBody] = useState('');
  const [bodyLength, setBodyLength] = useState(0);
  const [bodyLengthLeft, setBodyLengthLeft] = useState(0);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [starRating, setRating] = useState(0);
  const [recommendValue, setRecommendValue] = useState(false);

  useEffect(() => {
    setBodyLength(body.length);
  }, [body]);

  useEffect(() => {
    setBodyLengthLeft(50 - bodyLength);
  }, [bodyLength]);

console.log(metaData.characteristics.Width.id)

  const Submit = () => {
    // if (summaryText.length)
    let formData = {
      product_id: productId,
      rating: starRating,
      summary: summaryText,
      recommend: recommendValue,
      name: userName,
      email: userEmail,
      photos: null,
      // characteristics: {
      //   metaData.characteristics.Width.id: width,
      //   metaData.characteristics.Comfort.id: comfort,
      //   metaData.characteristics.Quality.id: quality,
      //   metaData.characteristics.Length.id: length,
      //   metaData.characteristics.Size.id: size,
      //   metaData.characteristics.Fit.id: fit
      // }
    };
    console.log(formData)
  };

  return (
    <ModalBackground>
      <ModalContainer>
        <button onClick={() => { setAddReviewToggle(!addReviewToggle); }}>X</button>
        <h1>Write Your Review</h1>
        <h3>
          {`About the ${productName}`}
          {' '}
        </h3>
        <p>Overall Rating - Select a Star</p>
        <StarRating setRating={setRating} rating={starRating} />
        <div onChange={(e) => { setRecommendValue(e.target.value); }}>
          <p style={{ display: 'inline-block' }}>Do you recommend this product?</p>
          <input type="radio" value="true" name="recommend" />
          Yes
          <input type="radio" value="false" name="recommend" />
          No
        </div>
        <Characteristics
          metaData={metaData}
          setWidth={setWidth}
          setComfort={setComfort}
          setQuality={setQuality}
          setLength={setLength}
          setSize={setSize}
          setFit={setFit}
          width={width}
          comfort={comfort}
          quality={quality}
          length={length}
          size={size}
          fit={fit}
        />
        <h5>Review Summary</h5>
        <input maxLength="60" onChange={(e) => { setSummaryText(e.target.value); }} type="text" placeholder="Example: Best purchase ever!" />
        <h5>Main Review</h5>
        <div>
          <InputBody maxLength="1000" onChange={(e) => { setBody(e.target.value); }} type="text" placeholder="Why did you like the product or not?" required />
          {bodyLengthLeft > 0
          && <p>{`Minimum required characters left: ${bodyLengthLeft}`}</p>}
          {bodyLengthLeft <= 0
          && <p>Minimum Reached</p>}
        </div>
        <h5>User Name</h5>
        <input maxLength="60" onChange={(e) => { setUserName(e.target.value); }} type="text" placeholder="Example: jackson11!" />
        <p style={{ fontSize: '10px' }}>For privacy reasons, do not use your full name or email address.</p>
        <h5>Email</h5>
        <input maxLength="60" onChange={(e) => { setUserEmail(e.target.value); }} type="email" placeholder="Example: jackson11@email.com" />
        <p style={{ fontSize: '10px' }}>For privacy reasons, you will not be emailed</p>
        <SelectButton type="button">Photo Upload</SelectButton>
        <SelectButton onClick={() => { Submit(); }} type="button">Submit Review</SelectButton>
      </ModalContainer>
    </ModalBackground>
  );
};

export default AddReviewForm;
