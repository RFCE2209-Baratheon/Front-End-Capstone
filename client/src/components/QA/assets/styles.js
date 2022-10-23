import styled, {createGlobalStyle} from 'styled-components';
import {MdClose} from 'react-icons/md'

const Wrapper = styled.div`

max-height: 50vh;
padding: 10px;
width: auto;
justify-content: top-left;
align-items: center;
overflow-y: scroll;

::-webkit-scrollbar {
  width: 0px;
  background: transparent; /* make scrollbar transparent */
}



`
const QListWrapper = styled.div`
overflow-y: scroll;
padding: 20px;
height: 300px;
width: auto;



::-webkit-scrollbar {
  width: 0px;
  background: transparent; /* make scrollbar transparent */
}
`
const QuestionListStyle = styled.div`
  background: rgb(240, 177, 17);
  position: relative;
  border: solid;
  border-width: 1px;
  border-radius: 5px;
  margin: 50px;
  width: 75%;

  .Title {
    position: relative;
    font-size: 1.25vw;
    margin:15px;
  }

  .loadMore {
    background: rgb(219, 144, 86);
    position: relative;
    left: 35%;
    white-space: normal !important;
    word-break:break-word;
    font-size: 19px;
    z-index: 0;
    margin: 5px;
    height: 50px;
    width 200px;

  }

  .addQuestion{
    background: rgb(219, 144, 86);
    position: relative;
    left: 35%;
    font-size: 20px;
    margin: 5px;
    height: 50px;
    width 200px;

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
background: rgb(255, 168, 102);
border-color:rgb(222, 133, 64);
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
const IndividualQuestionStyle = styled.div`

border-top: ridge;
border-color:rgb(222, 133, 64);
background: rgb(219, 144, 86);
.question{

}

.user {
  font-style: italic;
}
.underlined {
  font-size: 1vw;
}
.answer {
  font-size: 1vw;
}
span {
  font-size: 1vw;
}

`
const SearchBarStyle = styled.input`
width: 99%;
padding: 10px;
background: rgb(219, 144, 86);
::placeholder {
  color: black;
}
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


const ModalBackground = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
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
export {Accordion, Questions, QuestionFolder, HelpfulButton, Wrapper, ImagesStyled, AlignRight, Test, AnswerStyle, SearchBarStyle, SearchBarWrapper, ModalButton, ModalBackground, ModalWrapper, ModalContent,CloseModalButton, ModalForm, IndividualQuestionStyle, QuestionListStyle,QListWrapper}