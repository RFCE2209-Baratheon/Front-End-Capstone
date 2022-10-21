import React from 'react'
import Answer from './Answer.jsx'
import Helpful from './Helpful.jsx'
import {PropTypes} from 'prop-types'
import {QuestionFolder, AlignRight} from './assets/styles.js'

const {useState, useEffect} = React;
const IndividualQuestion = ({question, index, shouldFetchQ, setShouldFetchQ}) => {

console.log('this is a question', question)
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
      <Helpful helpfulCount={question.question_helpfulness} id={question.question_id} shouldFetchQ={shouldFetchQ} setShouldFetchQ={setShouldFetchQ}/>
      </AlignRight>
      <QuestionFolder className={index} open={open}>
        <Answer answer={question.question_id}/>
      </QuestionFolder>
    </div>
  )
}

IndividualQuestion.propTypes = {
  question: PropTypes.object,
  index: PropTypes.number,
  shouldFetchQ: PropTypes.bool,
  setShouldFetchQ: PropTypes.func

}
export default IndividualQuestion