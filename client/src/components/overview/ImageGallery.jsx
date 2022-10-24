/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import DefaultView from './DefaultView.jsx';
import ExpandedView from './ExpandedView.jsx';
import {StyledExpand} from './styledIcons.js';

const ImageGalleryContainerDefault = styled.div`
  width: 500px;
  &:hover {
    cursor:zoom-in;
  }
`
const ImageGalleryContainerExpand = styled.div`
  position: relative;
  width: 100%;
`

const ImageGallery = ({ styleImages, defaultView, expandedView, changeView }) => {

  const [current, setCurrent] = useState(0);
  const length = styleImages.length; // 9

  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(7);
  const [activeThumbnails, setActiveThumbnails] = useState(styleImages.slice(start, end));

  if (length > 7) {
    var verticalScroll = true;
  }

  const nextSlide = (e) => {
    e.stopPropagation();
    setCurrent(current === length - 1 ? length - 1 : current + 1);
  };

  const prevSlide = (e) => {
    e.stopPropagation();
    setCurrent(current === 0 ? 0 : current - 1);
  };

  if (!Array.isArray(styleImages) || length <= 0) {
    return null;
  }

  const upSlide = (e) => {
    e.stopPropagation();
    setStart(start === 0 ? 0 : start - 1);
    setEnd(end === 7 ? 7 : end - 1);
  };

  const downSlide = (e) => {
    e.stopPropagation();
    setStart(start === length - 7 ? length - 7 : start + 1);
    setEnd(end === length ? length : end + 1);
  };

  const changeThumbnails = () => {
    setActiveThumbnails(styleImages.slice(start, end));
  }

  useEffect(changeThumbnails, [start, end, styleImages]);

  return (
    <>
      {/* <div data-testid="expand-button">
        <StyledExpand onClick={() => {
          setDefaultView(!defaultView);
          setExpandedView(!expandedView);
        }} />
      </div> */}
      <ImageGalleryContainerDefault onClick={changeView}>
        {defaultView && <DefaultView styleImages={styleImages} activeThumbnails={activeThumbnails} current={current} setCurrent={setCurrent} nextSlide={nextSlide} prevSlide={prevSlide} verticalScroll={verticalScroll} upSlide={upSlide} downSlide={downSlide} length={length} start={start} end={end} />}
      </ImageGalleryContainerDefault>

      <ImageGalleryContainerExpand onClick={changeView}>
        {expandedView && <ExpandedView styleImages={styleImages} activeThumbnails={activeThumbnails} current={current} setCurrent={setCurrent} nextSlide={nextSlide} prevSlide={prevSlide} verticalScroll={verticalScroll} upSlide={upSlide} downSlide={downSlide} length={length} start={start} end={end} />}
      </ImageGalleryContainerExpand>
      {/* ISSUE: vertical arrow clicks mess up "current" state (renders wrong main image) & highlighted thumbnail sticks to position and not thumbnail */}
    </>
  )
}

export default ImageGallery;