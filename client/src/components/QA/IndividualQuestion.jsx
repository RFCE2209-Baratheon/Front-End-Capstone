import React from 'react'
import Answer from './Answer.jsx'
import Helpful from './Helpful.jsx'
import {PropTypes} from 'prop-types'
import {QuestionFolder, AlignRight, IndividualQuestionStyle} from './assets/styles.js'
import axios from 'axios'

const {useState, useEffect} = React;

const IndividualQuestion = ({renderQLength, question, index, shouldFetchQ, setShouldFetchQ}) => {
console.log('renderQLength', renderQLength)




//State
const [open, setOpen] = useState(false)

//hooks & handlers
const toggleOpen = () => {
  setOpen(!open)
}

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
    console.log('report success, fetching questions now')
    setShouldFetchQ(!shouldFetchQ)
  })
  .catch((error) => {

  })

}

//component
  return (
    <IndividualQuestionStyle className = 'individualQuestion' selectIndex={`${index}`} renderQLength={renderQLength}>
      <span className='question' onClick={toggleOpen}> {`Q: ${question.question_body}`}</span>
      <AlignRight>
        <Helpful className='helpful'helpfulCount={question.question_helpfulness} id={question.question_id} helpfulHandler={helpfulQuestionOnclick} reportHandler={reportQuestionOnclick}/>
      </AlignRight>
      <QuestionFolder className={index} open={open}>
        <Answer questionid={question.question_id} shouldFetchQ={shouldFetchQ} setShouldFetchQ={setShouldFetchQ}/>
      </QuestionFolder>
    </IndividualQuestionStyle>
  )
}

//propTypes
IndividualQuestion.propTypes = {
  question: PropTypes.object,
  index: PropTypes.number,
  shouldFetchQ: PropTypes.bool,
  setShouldFetchQ: PropTypes.func

}
export default IndividualQuestion