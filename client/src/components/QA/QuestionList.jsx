import React from 'react';
// import './assets/styles.css'
import axios from 'axios';
import {Accordion, Wrapper} from './assets/styles.js'
import IndividualQuestion from './IndividualQuestion.jsx'
// react hooks
const { useState, useEffect } = React;

const QuestionList = () => {


  // States
  // const [selected, setSelected] = useState(null)
  const [productId, setProductId] = useState('37314')
  const [renderQ, setRenderQ] = useState([])
  const [questions, setQuestions] = useState([])

  // let questionsAmount = 0;
  // Hooks
  useEffect(()=> {

    // Config for request
    const config = {
      params: {product_id: productId},
      headers:{'Authorization':'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'}
    }

    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions', config)
    .then((res)=>{
      setQuestions(res.data.results)
      setRenderQ(res.data.results.slice(0,4))
    })
    .catch((error)=>{
      console.error(error)
    })



  }, [productId])

  return (
    <span> Questions & Answers
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
      </Accordion>
    </div>
    </Wrapper>
    </span>

  )
}

export default QuestionList;


// {questions.map(function(question, index){
//   questionsAmount++
//   if(questionsAmount < 5){
//   return(


//     <div className='Question' key={index}>
//       {/* in the future this should render a question component */}

//       <h2 className='Title' onClick={()=>{ toggle(index) }}>
//         {`Question ${index + 1}`}
//       </h2>

//       <span>{selected === index ? '-': '+'}</span>
//       <div className={selected === index ? 'Body show': 'Body'}>
//         {`Question Body: ${question.question_body}`}
//       </div>
//     </div>

// )}
// })}