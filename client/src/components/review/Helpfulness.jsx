/* eslint-disable react/function-component-definition */
import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import axios from 'axios';
import { HiOutlineEmojiHappy} from 'react-icons/hi';
import { ImSad} from 'react-icons/im';


const HelpfulDiv = styled.div`{
  white-space : nowrap;
}`;

const HelpfulClick = styled.button`{
  display : inline-block;
}`;

const Helpfulness = ({ review, help }) => {
  // This state is only temporarily - need to implement storing the results permanently
  const [helpfulness, setHelpfulness] = useState({ yes: help, no: Math.floor(Math.random() * 100) });
  const [clicked, setClicked] = useState(false);
  const [yesClick, setYesClick] = useState(false);
  const [hideClick, setHideClick] = useState(true);
  const [noClick, setNoClick] = useState(false);

  const handlePut = () => {
    let data = {id: review.review_id}
    axios.put('/reviews', data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const yesHandler = () => {
    const temp = { ...helpfulness };
    temp.yes++;
    setHelpfulness(temp);
    setClicked(true);
    handlePut();
    setHideClick(false);
    setYesClick(true);
  };

  const noHandler = (helpfulness) => {
    const temp = { ...helpfulness };
    temp.no++;
    setHelpfulness(temp);
    setClicked(true);
    setHideClick(false);
    setNoClick(true);
  };

  return (
    <HelpfulDiv data-testid="helpful-1">
      {'Helpful? '}
      {hideClick &&
      <HelpfulClick disabled={clicked} onClick={() => { yesHandler(helpfulness); }} style={{ textDecoration: 'underline', color: 'blue' }}>
        {'Yes '}
        <span style={{ color: 'black' }}>
          {` |${helpfulness.yes}|  `}
        </span>
      </HelpfulClick>
      }
      {yesClick &&
        <HiOutlineEmojiHappy style={{color :'green'}}/>
      }
      {hideClick &&
      <HelpfulClick disabled={clicked} onClick={() => { noHandler(helpfulness); }} style={{ textDecoration: 'underline', color: 'blue' }}>
        {'No '}
        <span style={{ color: 'black' }}>
          {` |${helpfulness.no}|  `}
        </span>
      </HelpfulClick>
      }
      {noClick &&
        <ImSad style={{color:"red"}}/>
      }
    </HelpfulDiv>
  );
};

export default Helpfulness;
