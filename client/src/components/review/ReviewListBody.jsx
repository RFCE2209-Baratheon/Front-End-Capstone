import React, {useEffect, useState} from 'react';
import styled, {css} from 'styled-components';
import ImagePopUp from './ImagePopUp.jsx'


const Thumbnail = styled.img `
  width: 40px;
  height: 40px;
`
const ModalThumbNail = (image) => {

  const [isOpen, setIsOpen] = useState(false);

  let toggleModal = () =>{
    setIsOpen(!isOpen)
 };

 return (
  <>
  <Thumbnail onClick ={()=>{toggleModal()}} key={image.id} src={image.url}></Thumbnail>
  {isOpen &&
        <img onClick ={() => {toggleModal()}} src={image.url}></img>
  }
  </>
 )

};



const ReviewListBody = ({review}) => {

  const [body, setBody] = useState(review.body.slice(0, 250));
  const [toggleBody, setToggleBody] = useState(false);
  const [expandedImageID, setExpandedImageID] = useState(null);


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
      {review.photos.map(ModalThumbNail)}
    </>
  )
}



export default ReviewListBody