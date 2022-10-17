import React from 'react'
import {Questions} from './assets/styles.js'
import {format, parseISO} from 'date-fns'
const Answer = ({answer}) => {
  console.log(Object.keys(answer))

  let questionDetailKeys = Object.keys(answer)
  return (

      <>
        {questionDetailKeys.map(function (currentKey, index) {
          return (
          <Questions key={index}>
          <div>
            <div></div>
            <div>{`Answer: ${answer[currentKey].body}`}</div>
            <div>
              <span>{`by ${answer[currentKey].answerer_name}, ${answer[currentKey].date} | `}</span>
              <span>Helpful <button>Yes</button>| <button>Report</button></span>
            </div>
          </div>
          </Questions>
          )
        })}
      </>

  )
}

export default Answer