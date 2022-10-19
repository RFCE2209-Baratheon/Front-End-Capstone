/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import {StyledLeftArrow, StyledRightArrow, StyledUpArrow, StyledDownArrow, StyledExpand} from './styledIcons.js';
// import CarouselItem from './CarouselItem.jsx';
import ImageCarousel from './ImageCarousel.jsx';
import ImageSidebar from './ImageSidebar.jsx';

const StyledCarousel = styled.section`
  position: relative;
  height: 80vh;
  display: flex;
  justify-content: left;
  align-items: center;
`

const StyledThumbnailAlign = styled.div`
  text-align: left;
  position: absolute;
`

const StyledCarouselImageSize = styled.div`
  width: 500px;
`

const DefaultView = ( {styleImages, activeThumbnails, current, setCurrent, nextSlide, prevSlide, verticalScroll, upSlide, downSlide, start, end} ) => {

  return (
    <>
      {current !== length-1 && <StyledRightArrow onClick={nextSlide} />}
      {current !== 0 && <StyledLeftArrow onClick={prevSlide} />}
      <StyledCarousel>
        <StyledCarouselImageSize>
          <ImageCarousel styleImages={styleImages} current={current} />
        </StyledCarouselImageSize>
        <StyledThumbnailAlign>
          <ImageSidebar activeThumbnails={activeThumbnails} current={current} setCurrent={setCurrent} />
        </StyledThumbnailAlign>
      </StyledCarousel>
      {verticalScroll && start !== 0 && <StyledUpArrow onClick={upSlide} />}
      {verticalScroll && end !== length && <StyledDownArrow onClick={downSlide} />}
    </>
  );
}

export default DefaultView;