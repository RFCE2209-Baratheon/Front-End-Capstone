/* eslint-disable react/prop-types */
import React, {useState} from 'react';
import styled from 'styled-components';
import {StyledLeftArrowExpand, StyledRightArrowExpand, StyledUpArrowExpand, StyledDownArrowExpand} from './styledIcons.js';
import ImageCarousel from './ImageCarousel.jsx';
import ImageSidebar from './ImageSidebar.jsx';

const StyledCarousel = styled.section`
  position: relative;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledThumbnailAlign = styled.div`
  text-align: left;
  position: relative;
`

const StyledCarouselImageSize = styled.div`
  width: 500px;
  &:hover {
    cursor:crosshair;
  }
`

const ExpandedView = ( {styleImages, activeThumbnails, current, setCurrent, nextSlide, prevSlide, verticalScroll, upSlide, downSlide, length, start, end} ) => {
  const [magnified, setMagnified] = useState(false);
  var onClickMagnify = (e) => {
    e.stopPropagation();
    setMagnified(!magnified);
  }
  // arrow buttons should show in expanded view before magnified gets set to true --currently in wrong position
  return (
    <>
      <StyledCarousel>
        {!magnified && current !== length-1 && <StyledRightArrowExpand onClick={nextSlide} />}
        {!magnified && current !== 0 && <StyledLeftArrowExpand onClick={prevSlide} />}
          <StyledThumbnailAlign>
            <ImageSidebar activeThumbnails={activeThumbnails} current={current} setCurrent={setCurrent} />
          </StyledThumbnailAlign>
          <StyledCarouselImageSize onClick={onClickMagnify}>
            <ImageCarousel styleImages={styleImages} current={current} magnified={magnified} />
          </StyledCarouselImageSize>
        {!magnified && verticalScroll && start !== 0 && <StyledUpArrowExpand onClick={upSlide} />}
        {!magnified && verticalScroll && end !== length && <StyledDownArrowExpand onClick={downSlide} />}
      </StyledCarousel>
    </>
  );
}

export default ExpandedView;