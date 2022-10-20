/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import CarouselItem from './CarouselItem.jsx';

// currently does not work
const StyledCarouselItem = styled.div`
  opacity: ${props => props.active ? '1' : '0'};
  transition-duration: ${props => props.active ? '1s' : '1s ease'};
  transition-property: sliding-vertically;
`

const ImageCarousel = ( {styleImages, current, magnified} ) => {

  return (
    <>
        {styleImages.map((image, index) =>
          <StyledCarouselItem active={index === current} key={index}>
            {index === current && (
              <CarouselItem image={image} magnified={magnified} />
            )}
          </StyledCarouselItem>
        )}
    </>
  );
}

export default ImageCarousel;