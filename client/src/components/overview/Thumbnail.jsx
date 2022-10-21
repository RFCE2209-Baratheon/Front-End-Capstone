/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const StyledThumbnail = styled.img`
  display: block;
  height: 80px;
  width: 60px;
  border: ${props => props.selected ? '3px solid white' : 'none'};
  cursor: pointer;
  margin: 10px;
`

const Thumbnail = ( {thumbnail, selected, onClick} ) => {
  return (
    <StyledThumbnail src={thumbnail.thumbnail_url} selected={selected} onClick={onClick} />
  )
}

export default Thumbnail;