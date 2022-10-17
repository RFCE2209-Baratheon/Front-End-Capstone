import React from 'react';
import './assets/styles.css'
import axios from 'axios';
import IndividualQuestion from './IndividualQuestion.jsx'
// react hooks
const { useState, useEffect } = React;

const QuestionList = () => {


  // States
  const [selected, setSelected] = useState(null)
  const [productId, setProductId] = useState('37314')
  const [questions, setQuestions] = useState([])
  let questionsAmount = 0;
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
    })
    .catch((error)=>{
      console.error(error)
    })

  }, [productId])

  // Handlers
  // const toggle = (index) => {
  //   if (selected === index) {
  //     return setSelected(null)
  //   }

  //   setSelected(index)
  // }
  return (
    <div className="wrapper">
      <div className="Accordion">
        {(questions.length === 0) ? <button className='AddQuestion'>Add a question</button> :<></>}

        {questions.map(function(question, index) {
          return <IndividualQuestion key={index} question={question}/>
        })}
      </div>
    </div>

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