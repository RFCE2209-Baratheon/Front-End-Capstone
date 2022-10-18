import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineExpand } from 'react-icons/ai';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const StyledThumbnail = styled.img`
    display: block;
    height: 80px;
    width: 60px;
    border: ${props => props.selected ? '2px solid white' : '1.5px solid black'};
    cursor: pointer;
    margin: 10px;
  `
  const StyledThumbnailAlign = styled.div`
    text-align: left;
    position: absolute;
  `

  const StyledCarouselImage = styled.img`
    width: 500px;
    &:hover {
      cursor:zoom-in;
    }
  `

  // transitions not working
  const StyledCarouselItem = styled.div`
    opacity: ${props => props.active ? '1' : '0'};
    transition-duration: ${props => props.active ? '1s' : '1s ease'};
    transition-property: sliding-vertically;
  `
  const StyledCarousel = styled.section`
    position: relative;
    height: 100vh;
    display: flex;
    justify-content: left;
    align-items: center;
  `
  const StyledLeftArrow = styled(AiOutlineArrowLeft)`
    position: absolute;
    top: 50%;
    left: 85px;
    font-size: 2rem;
    color: #000;
    z-index: 10;
    cursor: pointer;
    user-select: none;
  `
  const StyledRightArrow = styled(AiOutlineArrowRight)`
    position: absolute;
    top: 50%;
    left: 450px;
    font-size: 2rem;
    color: #000;
    z-index: 10;
    cursor: pointer;
    user-select: none;
  `

  const StyledExpand = styled(AiOutlineExpand)`
    position: absolute;
    top: 10%;
    left: 450px;
    font-size: 2rem;
    color: #000;
    z-index: 10;
    cursor: pointer;
    user-select: none;
  `

  const StyledUpArrow = styled(IoIosArrowUp)`
    position: absolute;
    top: -5%;
    left: 30px;
    font-size: 2rem;
    color: #000;
    z-index: 10;
    cursor: pointer;
    user-select: none;
  `

  const StyledDownArrow = styled(IoIosArrowDown)`
    position: absolute;
    top: 100%;
    left: 30px;
    font-size: 2rem;
    color: #000;
    z-index: 10;
    cursor: pointer;
    user-select: none;
  `

const ImageGallery = ({ styleImages }) => {

  const [current, setCurrent] = useState(0);
  const length = styleImages.length; // 9


  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(7);
  const [activeThumbnails, setActiveThumbnails] = useState(styleImages.slice(start, end));

  const nextSlide = () => {
    setCurrent(current === length - 1 ? length - 1 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? 0 : current - 1);
  };

  if (!Array.isArray(styleImages) || length <= 0) {
    return null;
  }

  const changeThumbnails = () => {
    setActiveThumbnails(styleImages.slice(start, end));
  }

  useEffect(() => {
    changeThumbnails();
  }, [start, end])

  const upSlide = () => {
    setStart(start === 0 ? 0 : start - 1);
    setEnd(end === 7 ? 7 : end - 1);
  };

  const downSlide = () => {
    setStart(start === length - 7 ? length - 7 : start + 1);
    setEnd(end === length ? length : end + 1);
  };

  if (length > 7) {
    var verticalScroll = true;
  }

  return (
    <>
      <h3>[Image Gallery]</h3>

      <StyledCarousel>
        <StyledExpand />
        {current !== length -1 && <StyledRightArrow onClick={nextSlide} />}
        {current !== 0 && <StyledLeftArrow onClick={prevSlide} />}

        {styleImages.map((image, index) =>
          <StyledCarouselItem active={index === current} key={index}>
            {index === current && (
              <StyledCarouselImage src={image.url} />
            )}
          </StyledCarouselItem>
        )}

        <StyledThumbnailAlign>
          {verticalScroll && start !== 0 && <StyledUpArrow onClick={upSlide} />}
          {activeThumbnails.map((thumbnail, index) =>
            <StyledThumbnail src={thumbnail.thumbnail_url} key={index} selected={index === current} onClick={() => setCurrent(index)} />
          )}
          {verticalScroll && end !== length && <StyledDownArrow onClick={downSlide} />}
        </StyledThumbnailAlign>
      </StyledCarousel>
    </>
  )
}

export default ImageGallery;