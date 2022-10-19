import React from 'react';
import axios from 'axios';
import {Accordion, Wrapper, SearchBarStyle} from './assets/styles.js'
import IndividualQuestion from './IndividualQuestion.jsx'
import SearchBar from './SearchBar.jsx'

const { useState, useEffect } = React;

const QuestionList = () => {

  //Local Variables
  const start = 0;
  const endStart = 4;

  // States
  const [end, setEnd] = useState(endStart)
  const [productId, setProductId] = useState('37314')
  const [renderQ, setRenderQ] = useState([])
  const [questions, setQuestions] = useState([])
  const [hide, setHide] = useState(true)

  console.log(questions)
  // Hooks
  useEffect(()=> {

    // Config for request
    const config = {
      params: {product_id: productId, count: 100},
      headers:{'Authorization':'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'},
    }

    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions', config)
    .then((res)=>{

      if (res.data.results.length <= 4) {
        setHide(false)
      }
      setQuestions(res.data.results)
      setRenderQ(res.data.results.slice(start, end))
    })
    .catch((error)=>{
      console.error(error)
    })

  }, [productId])

  useEffect(()=>{

    if (end !== endStart && end >= questions.length) {
      setHide(false);
    }

  }, [end])
  // console.log('renderQ',renderQ, 'questions',questions)
  // Handlers

  const loadMore = () => {

    if (renderQ.length <= questions.length) {

      let newEnd = end + 2
      let newResults = questions.slice(start, newEnd)
      setEnd(newEnd)
      setRenderQ(newResults)
    }
  }

  //component
  return (
    <>
    <span> QUESTIONS & ANSWERS </span>
    <SearchBar questions={questions} setRenderQ={setRenderQ} renderQ={renderQ}/>
    <Wrapper>
    <div>
      <Accordion>
      <div className="Accordion">
        {(renderQ.length === 0) ? <button className='AddQuestion'>Add a question</button> :<></>}
        {renderQ.map(function(question, index) {

          return (
            <IndividualQuestion key={index} question={question} open={open}/>
          )
        })}
      </div>
      {hide ? <button onClick={loadMore}> Load more questions </button> : <></>}
      </Accordion>
    </div>
    </Wrapper>
    </>

  )
}

export default QuestionList;