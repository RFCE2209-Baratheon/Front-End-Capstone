import styled from 'styled-components';

const Wrapper = styled.div`

max-height: 50vh;
width: 100vh;
justify-content: top-left;
align-items: center;
border: inset;
overflow-y: scroll;

::-webkit-scrollbar {
  width: 0px;
  background: transparent; /* make scrollbar transparent */
}
`
const HelpfulButton = styled.button`
border: none;
background-color:inhert;
cursor: pointer;
  &:hover {
    background-color: lightblue;
  }
`

const ImagesStyled = styled.img`

width: 10%;
height: auto;
`
const Accordion = styled.div`
width: 500px;
background: none;
`

const Questions = styled.div`
border: solid;
background:none;
margin-bottom: 5px;
padding: 10px 20px;
`


const QuestionFolder = styled.div`
  width: 100%;
  max-height: ${(props) => (props.open ? '20vh' : '0px')};
  transition: all 1s ease-in-out;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
  }
`

export {Accordion, Questions, QuestionFolder, HelpfulButton, Wrapper, ImagesStyled}