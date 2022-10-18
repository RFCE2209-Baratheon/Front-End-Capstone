import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledCarouselImage = styled.img`
    width: 500px;
    &:hover {
      cursor:zoom-in;
    }
  `

const CarouselItem = ( {image} ) => {
  return (
    <StyledCarouselImage src={image.url} />
  )
}

export default CarouselItem;