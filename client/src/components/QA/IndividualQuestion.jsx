import React from 'react'
import Answer from './Answer.jsx'
import Helpful from './Helpful.jsx'
import {PropTypes} from 'prop-types'
import {QuestionFolder, AlignRight, IndividualQuestionStyle} from './assets/styles.js'
import axios from 'axios'

const {useState, useEffect} = React;
const IndividualQuestion = ({question, index, shouldFetchQ, setShouldFetchQ}) => {

  const helpfulQuestionOnclick = (iD) => {

    const config = {params: {question_id: iD}}
    axios.put('/qa/questions/:question_id/helpful', {}, config)
    .then((success) => {
      setShouldFetchQ(!shouldFetchQ)
    })
    .catch((error) => {

    })

  }

  const reportQuestionOnclick = (iD) => {

    const config = {params: {question_id: iD}}
    axios.put('/qa/questions/:question_id/report', {}, config)
    .then((success) => {
      setShouldFetchQ(!shouldFetchQ)
    })
    .catch((error) => {

    })

  }


//State
const [open, setOpen] = useState(null)

//Handler
const toggleOpen = () => {
  setOpen(!open)
}

//component
  return (
    <IndividualQuestionStyle className = 'questionWrapper'>
      <span className='question' onClick={toggleOpen}> {`Q: ${question.question_body}`}</span>
      <AlignRight>
        <Helpful className='helpful'helpfulCount={question.question_helpfulness} id={question.question_id} helpfulHandler={helpfulQuestionOnclick} reportHandler={reportQuestionOnclick}/>
      </AlignRight>
      <QuestionFolder className={index} open={open}>
        <Answer answer={question.question_id} shouldFetchQ={shouldFetchQ} setShouldFetchQ={setShouldFetchQ}/>
      </QuestionFolder>
    </IndividualQuestionStyle>
  )
}

IndividualQuestion.propTypes = {
  question: PropTypes.object,
  index: PropTypes.number,
  shouldFetchQ: PropTypes.bool,
  setShouldFetchQ: PropTypes.func

}
export default IndividualQuestion