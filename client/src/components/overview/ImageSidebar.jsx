/* eslint-disable react/prop-types */
import React from 'react';
import Thumbnail from './Thumbnail.jsx';
import {PropTypes} from 'prop-types'
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

ImageSidebar.propTypes = {
  activeThumbnails: PropTypes.array,
  current: PropTypes.number,
  setCurrent: PropTypes.func,
  start: PropTypes.number,
  end: PropTypes.number
}

export default ImageSidebar;