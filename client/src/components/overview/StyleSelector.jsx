import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const StyledIconImage = styled.img`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  transform: scale(1.5);
  margin-top: 12px;
  `
const StyledIconDiv = styled.div`
  width: 75px;
  height: 75px;
  overflow: hidden;
  border-radius: 50%;
  position: relative;
  margin: 5px;
`

const StyledIconsDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 400px;
`

const StyledOverlay = styled.div`
  position: absolute;
  bottom: 0px;
  right: 14px;
  color: white;
  font-size: 30px;
  user-select: none;
  cursor: pointer;
`

const StyleSelector = ( {styleData, currentStyle, onStyleClick} ) => {

  const [styleId, setStyleId] = useState(currentStyle.style_id);
  let list;
  console.log('in style selector: ', styleData)


  return (
    <>
      <b>STYLE &gt; </b>
      <span>{currentStyle.name}</span>
      <br></br>
      <StyledIconsDiv>
        {styleData.map((style, index) =>
          <StyledIconDiv key={index} onClick={() => {
            setStyleId(style.style_id)
            onStyleClick(styleId);
            }}>
            <StyledIconImage src={style.photos[0].thumbnail_url}/>
            {styleId === style.style_id && <StyledOverlay>✓</StyledOverlay>}
          </StyledIconDiv>
        )}
      </StyledIconsDiv>
    </>
  )
}

export default StyleSelector;

