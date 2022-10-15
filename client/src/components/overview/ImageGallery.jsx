import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineExpand } from 'react-icons/ai';

const ImageGallery = ({ styleImages }) => {

  const [current, setCurrent] = useState(0);
  const length = styleImages.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(styleImages) || length <= 0) {
    return null;
  }

  const StyledThumbnail = styled.img`
    display: block;
    height: 100px;
    width: 75px;
    border: 1.5px solid black;
    cursor: pointer;
    margin: 10px;
  `
  const StyledThumbnailAlign = styled.div`
    text-align: left;
    position: absolute;
  `

  const StyledCarouselImage = styled.img`
    width: 500px;
  `

  // transitions not working
  const StyledCarouselItem = styled.div`
    opacity: ${(active) => (active ? 1 : 0)};
    transition-duration: ${(active) => (active ? '1s' : '1s ease')};
    transform: ${(active) => (active ? 'scale(1.08)' : 0)};
  `
  const StyledCarousel = styled.section`
    position: relative;
    height: 100vh;
    display: flex;
    justify-content: left;
    align-items: center;
  `
  const StyledLeftArrow = styled(AiOutlineArrowLeft)`
    position: absolute;
    top: 50%;
    left: 85px;
    font-size: 2rem;
    color: #000;
    z-index: 10;
    cursor: pointer;
    user-select: none;
  `
  const StyledRightArrow = styled(AiOutlineArrowRight)`
    position: absolute;
    top: 50%;
    left: 450px;
    font-size: 2rem;
    color: #000;
    z-index: 10;
    cursor: pointer;
    user-select: none;
  `

  const StyledExpand = styled(AiOutlineExpand)`
    position: absolute;
    top: 10%;
    left: 450px;
    font-size: 2rem;
    color: #000;
    z-index: 10;
    cursor: pointer;
    user-select: none;
  `

  return (
    <>
      <h3>[Image Gallery]</h3>

      <StyledCarousel>
        <StyledExpand />
        <StyledLeftArrow onClick={prevSlide} />
        <StyledRightArrow onClick={nextSlide}/>

        {styleImages.map((image, index) =>
          <StyledCarouselItem active={index === current ? true : false} key={index}>
            {index === current && (
              <StyledCarouselImage src={image.thumbnail_url}></StyledCarouselImage>
            )}
          </StyledCarouselItem>
        )}
        <StyledThumbnailAlign>
          {styleImages.map((thumbnail, index) =>
          <StyledThumbnail src={thumbnail.thumbnail_url} key={index} onClick={() => {
            setCurrent(index);
          }}></StyledThumbnail>
          )}
        </StyledThumbnailAlign>

      </StyledCarousel>


    </>
  )
}

export default ImageGallery;