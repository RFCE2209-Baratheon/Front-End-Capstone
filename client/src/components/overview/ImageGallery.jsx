/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {StyledLeftArrow, StyledRightArrow, StyledUpArrow, StyledDownArrow, StyledExpand} from './styledIcons.js';
import CarouselItem from './CarouselItem.jsx';
import Thumbnail from './Thumbnail.jsx';

const StyledThumbnailAlign = styled.div`
  text-align: left;
  position: absolute;
`
const StyledCarousel = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: left;
  align-items: center;
`
// transitions not working
const StyledCarouselItem = styled.div`
  opacity: ${props => props.active ? '1' : '0'};
  transition-duration: ${props => props.active ? '1s' : '1s ease'};
  transition-property: sliding-vertically;
`

const ImageGallery = ({ styleImages }) => {

  const [defaultView, setDefaultView] = useState(true);


  const [current, setCurrent] = useState(0);
  const length = styleImages.length; // 9

  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(7);
  const [activeThumbnails, setActiveThumbnails] = useState(styleImages.slice(start, end));

  if (length > 7) {
    var verticalScroll = true;
  }

  const nextSlide = () => {
    setCurrent(current === length - 1 ? length - 1 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? 0 : current - 1);
  };

  if (!Array.isArray(styleImages) || length <= 0) {
    return null;
  }

  const upSlide = () => {
    setStart(start === 0 ? 0 : start - 1);
    setEnd(end === 7 ? 7 : end - 1);
  };

  const downSlide = () => {
    setStart(start === length - 7 ? length - 7 : start + 1);
    setEnd(end === length ? length : end + 1);
  };

  const changeThumbnails = () => {
    setActiveThumbnails(styleImages.slice(start, end));
  }

  useEffect(changeThumbnails, [start]);

  return (
    <>
      <h3>[Image Gallery]</h3>

      <StyledCarousel>
        <StyledExpand onClick={()=>setDefaultView(!defaultView)} />
        {current !== length -1 && <StyledRightArrow onClick={nextSlide} />}
        {current !== 0 && <StyledLeftArrow onClick={prevSlide} />}

        {styleImages.map((image, index) =>
          <StyledCarouselItem active={index === current} key={index}>
            {index === current && (
              <CarouselItem image={image} />
            )}
          </StyledCarouselItem>
        )}

        {/* ISSUE: vertical arrow clicks mess up "current" state (renders wrong main image) & highlighted thumbnail sticks to position and not thumbnail */}
        <StyledThumbnailAlign>
          {verticalScroll && start !== 0 && <StyledUpArrow onClick={upSlide} />}
          {activeThumbnails.map((thumbnail, index) =>
            <Thumbnail thumbnail={thumbnail} key={index} selected={index === current} onClick={() => setCurrent(index)} />
          )}
          {verticalScroll && end !== length && <StyledDownArrow onClick={downSlide} />}
        </StyledThumbnailAlign>
      </StyledCarousel>
    </>
  )
}

export default ImageGallery;