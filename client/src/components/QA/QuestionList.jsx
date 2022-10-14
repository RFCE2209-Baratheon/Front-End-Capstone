import React from 'react';
import './assets/styles.css';
import axios from 'axios';
// react hooks
const { useState, useEffect } = React;

const QuestionList = () => {


  // States
  const [selected, setSelected] = useState(null)
  const [productId, setProductId] = useState('37314')
  const [questions, setQuestions] = useState([])
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
  const toggle = (index) => {
    if (selected === index) {
      return setSelected(null)
    }

    setSelected(index)
  }
  return (
    <div className="wrapper">
      <div className="Accordion">
        {questions.map(function(question, index){
            return(
              <div className='Question' key={index}>
                {/* in the future this should render a question component */}
                <h2 className='Title' onClick={()=>{ toggle(index) }}>
                  {`Question ${index + 1}`}
                </h2>
                <span>{selected === index ? '-': '+'}</span>
                <div className={selected === index ? 'Body show': 'Body'}>
                  {`Question Body: ${question.question_body}`}
                </div>
              </div>
          )
        })}
        <button>Show More Questions</button>
      </div>
    </div>
  )
}

export default QuestionList;