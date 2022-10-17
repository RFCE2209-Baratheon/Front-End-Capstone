import React from 'react'
import Answer from './Answer.jsx'
import Helpful from './Helpful.jsx'
import {QuestionFolder} from './assets/styles.js'

const {useState} = React;
const IndividualQuestion = ({question}) => {

//State
const [open, setOpen] = useState(null)

//Handler
const toggleOpen = () => {
  setOpen(!open)
}

  return (
    <div>
      <h2 onClick={toggleOpen}> {`Q: ${question.question_body}`}</h2>
      <QuestionFolder open={open}>
      <div>
        <Answer answer={question.answers}/>
      </div>
      <button> Load More Answers </button>
      <Helpful helpfulCount={question.question_helpfulness}/>
      </QuestionFolder>
    </div>
  )
}

export default IndividualQuestion