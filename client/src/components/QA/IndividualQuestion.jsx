import React from 'react'
import Answer from './Answer.jsx'
const IndividualQuestion = ({question}) => {

  return (
    <div>
      <h2> {question.question_body}</h2>
      <div>
        <Answer/>
      </div>

    </div>
  )
}

export default IndividualQuestion