/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
// import {StyledLeftArrow, StyledRightArrow, StyledUpArrow, StyledDownArrow, StyledExpand} from './styledIcons.js';
// import CarouselItem from './CarouselItem.jsx';
import Thumbnail from './Thumbnail.jsx';

// const StyledThumbnailAlign = styled.div`
//   text-align: left;
//   position: absolute;
// `

const ImageSidebar = ( {activeThumbnails, current, setCurrent} ) => {
  return (
    <>
      {/* <StyledThumbnailAlign> */}
        {activeThumbnails.map((thumbnail, index) =>
          <Thumbnail thumbnail={thumbnail} key={index} selected={index === current} onClick={(e) => {
            e.stopPropagation();
            setCurrent(index)}} />
        )}
      {/* </StyledThumbnailAlign> */}
    </>
  );
}

export default ImageSidebar;