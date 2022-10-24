/* eslint-disable react/prop-types */
import React from 'react';
import Thumbnail from './Thumbnail.jsx';

const ImageSidebar = ( {activeThumbnails, current, setCurrent, start, end} ) => {
  return (
    <>
      {activeThumbnails.map((thumbnail, index) =>
        <Thumbnail thumbnail={thumbnail} key={index} selected={index + start === current} onClick={(e) => {
          e.stopPropagation();
          setCurrent(index + start)}} />
      )}
    </>
  );
}

export default ImageSidebar;