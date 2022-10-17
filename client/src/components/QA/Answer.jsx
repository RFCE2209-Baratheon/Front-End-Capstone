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
            <div>{`A: ${answer[currentKey].body}`}</div>
            <div>
              <span>{`by ${answer[currentKey].answerer_name} `}</span>
              <span>{format(parseISO(`${answer[currentKey].date}`), 'MMMM d, yyyy')}</span>
              <span> Helpful
                <u>Yes</u>| <u>Report</u>
              </span>
            </div>
          </div>
          </Questions>
          )
        })}
      </>

  )
}

export default Answer


