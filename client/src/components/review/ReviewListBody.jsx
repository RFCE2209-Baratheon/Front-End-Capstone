import React, {useEffect, useState} from 'react';
import styled, {css} from 'styled-components';
import ImagePopUp from './ImagePopUp.jsx'




const ReviewListBody = ({review}) => {

  const [body, setBody] = useState(review.body.slice(0, 250));
  const [toggleBody, setToggleBody] = useState(false);
  const [imageId, setImageId] = useState(0);

  let showBody = (body) => {
    if (review.body.length > 250) {
      setToggleBody(!toggleBody);
    }
  }

  useEffect(()=>{
    showBody(review.body);
  }, []);

  return (
    <>
    <p>{body}</p>
      {toggleBody &&
        <p onClick = {() => setBody(review.body)} style={{ textDecoration : "underline", color : "blue" }}>Show More...</p>
      }
      {review.photos.map((image) => (
        <>
        <ImagePopUp image = {image}></ImagePopUp>
        </>
      ))}
    </>
  )
}

export default ReviewListBody