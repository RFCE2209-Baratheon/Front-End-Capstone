import styled from 'styled-components';

const Wrapper = styled.div`
display: flex;
height: 100vh;
width: 100vh;
justify-content: center;
align-items: center;
`

const Accordion = styled.div`
width: 500px;
background: rgb(239, 220, 190);
`

const Questions = styled.div`
border: solid;
background:rgb(239, 220, 190);
margin-bottom: 5px;
padding: 10px 20px;
`

const Title = styled.h2`
color:rgb(122, 85, 34);
display: flex;
justify-content: space-between;
align-items: center;
`

const Body = styled.div`
color:rgb(122, 85, 34);
max-height: 0;
overflow: hidden;
transition: all 0.5s cubic-bezier(0,1,0,1);`

const BodyShow = styled.div`
height: auto;
max-height: 9999px;
transition: all 0.5s cubic-bezier(1,0,1,0);
`

const AddQuestion = styled.button`
display: flex;
`
const QuestionFolder = styled.div`
width: 100%;
    max-height: ${(props) => (props.open ? '500px' : '0')};
    transition: all 1s ease-in-out;
    overflow: hidden;
`

export {Accordion, Questions, QuestionFolder}