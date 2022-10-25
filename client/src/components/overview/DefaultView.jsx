/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import ImageCarousel from './ImageCarousel.jsx';
import ImageSidebar from './ImageSidebar.jsx';
import {StyledLeftArrow, StyledRightArrow, StyledUpArrow, StyledDownArrow, StyledExpand} from './styledIcons.js';

const StyledCarousel = styled.div`
  position: relative;
  display: flex;
  justify-content: left;
  align-items: center;
`

const StyledThumbnailAlign = styled.div`
  text-align: left;
  position: absolute;
  margin-left: 10px;
`

const StyledCarouselImageSize = styled.div`
  width: 500px;
`

const StyledVerticalButtons = styled.div`
  display: flex;
  justify-content: center;
`

const DefaultView = ( {styleImages, activeThumbnails, current, setCurrent, nextSlide, prevSlide, verticalScroll, upSlide, downSlide, length, start, end} ) => {
  return (
    <>
      <StyledCarousel>
          {current !== length-1 && <StyledRightArrow onClick={nextSlide} />}
          {current !== 0 && <StyledLeftArrow onClick={prevSlide} />}
        <StyledCarouselImageSize>
          <ImageCarousel styleImages={styleImages} current={current} />
        </StyledCarouselImageSize>

        <StyledVerticalButtons>
          {verticalScroll && start !== 0 && <StyledUpArrow onClick={upSlide} />}
          {verticalScroll && end !== length && <StyledDownArrow onClick={downSlide} />}
        </StyledVerticalButtons>
        <StyledThumbnailAlign>
          <ImageSidebar activeThumbnails={activeThumbnails} current={current} setCurrent={setCurrent} start={start} end={end} />
        </StyledThumbnailAlign>
      </StyledCarousel>
    </>
  );
}

export default DefaultView;