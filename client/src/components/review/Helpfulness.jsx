/* eslint-disable react/function-component-definition */
import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import axios from 'axios';

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

  const handlePut = () => {
    console.log('in put', review.review_id)
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
  };

  const noHandler = (helpfulness) => {
    const temp = { ...helpfulness };
    temp.no++;
    setHelpfulness(temp);
    setClicked(true);
  };

  return (
    <HelpfulDiv>
      {'Helpful? '}
      <HelpfulClick disabled={clicked} onClick={() => { yesHandler(helpfulness); }} style={{ textDecoration: 'underline', color: 'blue' }}>
        {'Yes '}
        <HelpfulClick style={{ color: 'black' }}>
          {` |${helpfulness.yes}|  `}
        </HelpfulClick>
      </HelpfulClick>
      <HelpfulClick disabled={clicked} onClick={() => { noHandler(helpfulness); }} style={{ textDecoration: 'underline', color: 'blue' }}>
        {'No '}
        <HelpfulClick style={{ color: 'black' }}>
          {` |${helpfulness.no}|  `}
        </HelpfulClick>
      </HelpfulClick>
    </HelpfulDiv>
  );
};

export default Helpfulness;
