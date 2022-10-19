import React from 'react'
import {PropTypes} from 'prop-types'
import {Questions, HelpfulButton, Test, AnswerStyle} from './assets/styles.js'
import {format, parseISO} from 'date-fns'
import Helpful from './Helpful.jsx'
import Images from './Images.jsx'
import axios from 'axios'
const {useState, useEffect} = React;



const Answer = ({answer}) => {

  //states and variables
  const [answers, setAnswers] = useState([])
  const [renderA, setRenderA] = useState([])
  const [hide, setHide] = useState(true)
  const [end, setEnd] = useState(2)
  const start = 0;

  useEffect(()=> {

    // Config for request
    const config = {
      headers:{'Authorization':'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'}
    }

    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/${answer}/answers`, config)
    .then((res)=>{
      setAnswers(res.data.results)
      setRenderA(res.data.results.slice(start, end))
    })
    .catch((error)=>{
      console.error(error)
    })

  }, [answer])


  useEffect(()=> {
    console.log('renderA length', renderA.length, 'answers length', answers.length)
    if (renderA.length === answers.length) {
      setHide(false)
    } else {
      setHide(true)
    }
  }, [renderA])

  //handlers
  const handleMoreAnswers = () => {
    setRenderA(answers.slice(start, renderA.length + 2))
  }



  //component
  return (
      <>
        {renderA.map(function (currentAnswer, index) {
          // {console.log('current key', currentKey, 'answer', answer)}
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
              <Helpful helpfulCount={currentAnswer.helpfulness}/>
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
  answer: PropTypes.number
}

export default Answer
