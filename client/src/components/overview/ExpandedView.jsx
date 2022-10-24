/* eslint-disable react/prop-types */
import React, {useState} from 'react';
import styled from 'styled-components';
import {StyledLeftArrowExpand, StyledRightArrowExpand, StyledUpArrowExpand, StyledDownArrowExpand, StyledBackButton} from './styledIcons.js';
import ImageCarousel from './ImageCarousel.jsx';
import ImageSidebar from './ImageSidebar.jsx';

const StyledCarousel = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledThumbnailAlign = styled.div`
  position: relative;
`

const StyledCarouselImageSize = styled.div`
  width: 500px;
  &:hover {
    cursor:crosshair;
  }
`

const ExpandedView = ( {styleImages, activeThumbnails, current, setCurrent, nextSlide, prevSlide, verticalScroll, upSlide, downSlide, length, start, end, changeView} ) => {
  const [magnified, setMagnified] = useState(false);
  var onClickMagnify = (e) => {
    e.stopPropagation();
    setMagnified(!magnified);
  }

  return (
    <>
      <StyledCarousel>
        <StyledThumbnailAlign>
        <StyledBackButton onClick={changeView}></StyledBackButton>
        {!magnified && current !== length-1 && <StyledRightArrowExpand onClick={nextSlide} />}
        {!magnified && current !== 0 && <StyledLeftArrowExpand onClick={prevSlide} />}
            <ImageSidebar activeThumbnails={activeThumbnails} current={current} setCurrent={setCurrent} start={start} />
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