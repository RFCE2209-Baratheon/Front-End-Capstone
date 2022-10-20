/* eslint-disable react/prop-types */
import React from 'react';
import Thumbnail from './Thumbnail.jsx';

const ImageSidebar = ( {activeThumbnails, current, setCurrent} ) => {
  return (
    <>
      {activeThumbnails.map((thumbnail, index) =>
        <Thumbnail thumbnail={thumbnail} key={index} selected={index === current} onClick={(e) => {
          e.stopPropagation();
          setCurrent(index)}} />
      )}
    </>
  );
}

export default ImageSidebar;