/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const StyledThumbnail = styled.img`
  width: 100%;
  height: 100%;
  cursor: pointer;
  transform: scale(1.5);
  margin-top: 20px;
  object-fit: cover;
  `

  const StyledThumbnailDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 75px;
  height: 75px;
  overflow: hidden;
  position: relative;
  margin: 5px;
  border: ${props => props.selected ? '3px solid white' : 'none'};
`

const Thumbnail = ( {thumbnail, selected, onClick} ) => {
  return (
    <StyledThumbnailDiv selected={selected}>
      <StyledThumbnail src={thumbnail.thumbnail_url} onClick={onClick} />
    </StyledThumbnailDiv>
  )
}

export default Thumbnail;