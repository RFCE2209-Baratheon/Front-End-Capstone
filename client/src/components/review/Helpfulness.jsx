import React, { useEffect, useState } from 'react';
import styled, {css} from 'styled-components';

const HelpfulDiv = styled.div `{
  white-space : nowrap;
}`

const HelpfulClick = styled.div `{
  display : inline-block;
}`

const Helpfulness = ({help}) => {

  //This state is only temporarily - need to implement storing the results permanently
  const [helpfulness, setHelpfulness] = useState({yes : help, no: 0});

  let yesHandler = (helpfulness) => {
    let temp = {...helpfulness}
    temp.yes++;
    setHelpfulness(temp);
  };

  let noHandler = (helpfulness) => {
    let temp = {...helpfulness}
    temp.no++;
    setHelpfulness(temp);
  };


  return (
    <>
    <HelpfulDiv >{`Helpful? `}
      <HelpfulClick onClick = {()=>{yesHandler(helpfulness)}} style={{ textDecoration : "underline", color : "blue"}}>{`Yes `}
        <HelpfulClick style = {{color:"black"}}>{` |${helpfulness.yes}|  `}
        </HelpfulClick>
      </HelpfulClick>
      <HelpfulClick onClick = {()=>{noHandler(helpfulness)}} style={{ textDecoration : "underline", color : "blue"}}>{`No `}
        <HelpfulClick style = {{color:"black"}}>{` |${helpfulness.no}|  `}
        </HelpfulClick>
      </HelpfulClick>
    </HelpfulDiv>

    </>
  )
};

export default Helpfulness;