import React from 'react'
import {Questions} from './assets/styles.js'
import {format, parseISO} from 'date-fns'
import Helpful from './Helpful.jsx'
import Images from './Images.jsx'

const {useState, useEffect} = React;

const Answer = ({answer}) => {


  let questionDetailKeys = Object.keys(answer)
  const [keys, setKeys] = useState([])

  useEffect(()=>{
    setKeys(questionDetailKeys.slice(0,2))
  }, [])

  return (

      <>
        {keys.map(function (currentKey, index) {
          return (
          <Questions key={index}>
          <div>
            <div>{`A: ${answer[currentKey].body}`}</div>
            <div>
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


