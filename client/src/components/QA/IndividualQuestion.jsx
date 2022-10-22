import React from 'react'
import Answer from './Answer.jsx'
import Helpful from './Helpful.jsx'
import {PropTypes} from 'prop-types'
import {QuestionFolder, AlignRight} from './assets/styles.js'
import axios from 'axios'

const {useState, useEffect} = React;
const IndividualQuestion = ({question, index, shouldFetchQ, setShouldFetchQ}) => {

  const helpfulQuestionOnclick = (iD) => {
    console.log('id', iD)
    const config = {params: {question_id: iD}}
    axios.put('/qa/questions/:question_id/helpful', {}, config)
    .then((success) => {
      // setShouldFetchQ(!shouldFetchQ)
    })
    .catch((error) => {

    })

  }

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
      <Helpful helpfulCount={question.question_helpfulness} id={question.question_id} handler={helpfulQuestionOnclick}/>
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