import React from 'react'
import {Questions} from './assets/styles.js'
import {format, parseISO} from 'date-fns'
import Helpful from './Helpful.jsx'
import Images from './Images.jsx'

const {useState, useEffect} = React;

const Answer = ({answer}) => {

  //local variables
  let questionDetailKeys = Object.keys(answer)
  const start = 0;
  let end = 2
  //state

  const [keys, setKeys] = useState(questionDetailKeys.slice(start, end))
  const [hide, setHide] = useState(true)


  //hooks
  // useEffect(()=>{
  //   setKeys()
  // }, [])

  //handlers
  const handleMoreAnswers = () => {
    let newEnd = end + 1;
    setKeys(questionDetailKeys.slice(start, newEnd))
    if (newEnd = questionDetailKeys.length) {
      setHide(false)
    }
  }

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
        {hide ? <button onClick={handleMoreAnswers}> Load More Answers </button> : <></>}
      </>

  )
}

export default Answer


