/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ReactImageZoom from 'react-image-zoom';

const StyledCarouselImage = styled.img`
  max-height: 100%;
  max-width: 100%;
`

const StyledReactZoomImage = styled.div`
  &:hover {
    cursor:zoom-out;
}
`

const CarouselItem = ( {image, magnified} ) => {
  const zoomProps =  {width: 500, zoomWidth: 500, img: image.url, zoomPosition: 'original'};

  return (
    <>
      {magnified &&
      <StyledReactZoomImage>
        <ReactImageZoom {...zoomProps} />
      </StyledReactZoomImage>}
      {!magnified && <StyledCarouselImage src={image.url} />}
    </>
  )
}

export default CarouselItem;