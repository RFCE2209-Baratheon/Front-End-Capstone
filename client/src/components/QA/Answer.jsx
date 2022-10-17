import React from 'react'
import {Questions} from './assets/styles.js'
import {format, parseISO} from 'date-fns'
import Helpful from './Helpful.jsx'
import Images from './Images.jsx'
const Answer = ({answer}) => {


  let questionDetailKeys = Object.keys(answer)


  return (

      <>
        {questionDetailKeys.map(function (currentKey, index) {
          return (
          <Questions key={index}>
          <div>
            <div>{`A: ${answer[currentKey].body}`}</div>
            <div>
              {console.log(answer[currentKey])}
              <span>{`by ${answer[currentKey].answerer_name} `}</span>
              <Images images={answer[currentKey].photos} />
              <span>{format(parseISO(`${answer[currentKey].date}`), 'MMMM d, yyyy')}</span>
              <Helpful helpfulCount={answer[currentKey].helpfulness}/>
            </div>
          </div>
          </Questions >
          )
        })}
      </>

  )
}

export default Answer


