import React from 'react'
import Answer from './Answer.jsx'
import Helpful from './Helpful.jsx'
import {PropTypes} from 'prop-types'
import {QuestionFolder, AlignRight} from './assets/styles.js'

const {useState, useEffect} = React;
const IndividualQuestion = ({question}) => {


//State
const [open, setOpen] = useState(null)

//Handler
const toggleOpen = () => {
  setOpen(!open)
}

//component
  return (
    <div data-testid='testing'>
      <span onClick={toggleOpen}> {`Q: ${question.question_body}`}</span>
      <AlignRight>
      <Helpful helpfulCount={question.question_helpfulness}/>
      </AlignRight>
      <QuestionFolder open={open}>
      <div>
        <Answer answer={question.question_id}/>
      </div>
      </QuestionFolder>
    </div>
  )
}

IndividualQuestion.propTypes = {
  question: PropTypes.object
}
export default IndividualQuestion