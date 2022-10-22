import React from 'react'
import {PropTypes} from 'prop-types'
import {Questions, HelpfulButton, Test, AnswerStyle} from './assets/styles.js'
import {format, parseISO} from 'date-fns'
import Helpful from './Helpful.jsx'
import Images from './Images.jsx'
import axios from 'axios'
const {useState, useEffect} = React;



const Answer = ({answer, shouldFetchQ, setShouldFetchQ}) => {

  //states and variables
  const [answers, setAnswers] = useState([])
  const [renderA, setRenderA] = useState([])
  const [hide, setHide] = useState(true)
  const [end, setEnd] = useState(2)
  const start = 0;

  useEffect(()=> {

    // Config for request
    const config = {
      params:{answer}
    }
    // console.log('hello')
    axios.get(`/qa/questions/:question_id/answers`, config)
    .then((res)=>{
      setAnswers(res.data.results)
      setRenderA(res.data.results.slice(start, end))
    })
    .catch((error)=>{
      console.error(error)
    })

  }, [answer])


  useEffect(()=> {
    if (renderA.length === answers.length) {
      setHide(false)
    } else {
      setHide(true)
    }
  }, [renderA])

  //handlers

  const helpfulAnswerOnclick = (iD) => {

    const config = {params: {answer_id: iD}}
    axios.put('/qa/answers/:answer_id/helpful', {}, config)
    .then((success) => {
      // setShouldFetchQ(!shouldFetchQ)
      setVoted(false)
      setHelpful(helpful+1)
    })
    .catch((error) => {

    })

  }

  const reportAnswerOnclick = (iD) => {

    const config = {params: {answer_id: iD}}
    axios.put('/qa/answers/:answer_id/report', {}, config)
    .then((success) => {
      console.log('question reported at id:', iD)
      setShouldFetchQ(!shouldFetchQ)
    })
    .catch((error) => {

    })

  }

  const handleMoreAnswers = () => {
    setRenderA(answers.slice(start, renderA.length + 2))
  }



  //component
  return (
      <>
        {renderA.map(function (currentAnswer, index) {
          return (
          <Questions key={index}>
          <Test>
          <div>
            <AnswerStyle>
            <span>{`A: ${currentAnswer.body}`}</span>
            </AnswerStyle>
            <div>
              <Images images={currentAnswer.photos} />
              <span>{`by ${currentAnswer.answerer_name}, `}</span>
              <span>{format(parseISO(`${currentAnswer.date}`), 'MMMM d, yyyy  |  ')}</span>
              <Helpful helpfulCount={currentAnswer.helpfulness} id={currentAnswer.answer_id} helpfulHandler={helpfulAnswerOnclick} reportHandler={reportAnswerOnclick}/>
            </div>
          </div>
          </Test>
          </Questions >
          )
        })}
        <button>Add Answer</button>
        {hide ? <button onClick={handleMoreAnswers}> Load More Answers </button> : <span> No more answers...</span>}
      </>

  )
}

//proptypes
Answer.propTypes = {
  answer: PropTypes.number,
  shouldFetchQ: PropTypes.bool,
  setShouldFetchQ: PropTypes.func
}

export default Answer
