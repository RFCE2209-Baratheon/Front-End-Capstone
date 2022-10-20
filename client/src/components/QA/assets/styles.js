import styled from 'styled-components';

const Wrapper = styled.div`

max-height: 50vh;
padding: 10px;
width: auto;
justify-content: top-left;
align-items: center;
border: solid;
border-width: 1px;
overflow-y: scroll;

::-webkit-scrollbar {
  width: 0px;
  background: transparent; /* make scrollbar transparent */
}
`
const HelpfulButton = styled.button`
border: none;
background-color:transparent;
text-align: right;
cursor: pointer;
  &:hover {
    background-color: lightblue;
  }
`

const ImagesStyled = styled.img`

width: 5%;
padding-bottom: 20px;
height: auto;
`
const Accordion = styled.div`
width: auto;
background: none;
`

const Questions = styled.div`
border-top: ridge;
border-top: ridge;
background:none;
margin-bottom: 5px;

`

// .attrs(props => ({
//   type: 'text',
//   size: props.small ? 5 : undefined,
// }))
const QuestionFolder = styled.div`

  width: 100%;
  max-height: ${(props) => (props.open ? '25vh' : '0px')};
  transition: all 1s ease-in-out;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
  }
`
const AnswerStyle = styled.span`
display: inline-block;
padding-bottom: 25px;
`

const SearchBarStyle = styled.input`
width: 99%;
padding: 10px;
`
const SearchBarWrapper = styled.div`
padding: 10px;
`

const Test =styled.div`
padding-top 25px;
padding-bottom 25px;
`
const AlignRight = styled.span`
float: right;
padding: 5px;
`

export {Accordion, Questions, QuestionFolder, HelpfulButton, Wrapper, ImagesStyled, AlignRight, Test, AnswerStyle, SearchBarStyle, SearchBarWrapper}