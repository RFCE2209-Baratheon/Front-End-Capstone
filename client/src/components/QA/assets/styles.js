import styled, {createGlobalStyle} from 'styled-components';
import {MdClose} from 'react-icons/md'
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

const ModalButton = styled.button`
  min-width: 100px;
  padding: 16px 32px;
  border-radius: 4px;
  border: none;
  background: #141414;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
`

const ModalStyle = createGlobalStyle` * {
box-sizing: border-box;
margin: 0;
padding: 0;
overflow-y: scroll;
font-family: 'Arial';
}`

const ModalBackground = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
}`

const ModalWrapper = styled.div`
  width: 35em;
  height: 35em;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
  }
`
const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  p {
    margin-bottom: 1rem;
  }
  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`
const ModalForm = styled.form`
display: flex;
flex-direction: column;
align-items: center;
gap: 10px;
.formSpan {
  width 90%;
  padding: 10px 24px;
  background: #141414;
  color: #fff;
  border: none;
  border-radius: 5px 5px 0% 0%
}

.formInput {
  width: 100%;
  margin-bottom: 25px;
}

.formTextArea {
  height: 100px;
  width: 100%;
  margin-bottom: 25px;
}

.submit {
  margin: 5px;
  cursor: pointer;
  border-radius: 5px 5px 5px 5px;
  width 50%;
}
.finalSpan {
  margin-bottom: 25px;
}
`
export {Accordion, Questions, QuestionFolder, HelpfulButton, Wrapper, ImagesStyled, AlignRight, Test, AnswerStyle, SearchBarStyle, SearchBarWrapper, ModalButton, ModalStyle, ModalBackground, ModalWrapper, ModalContent,CloseModalButton, ModalForm}