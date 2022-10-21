import React from 'react'
import {PropTypes} from 'prop-types'
import {HelpfulButton} from './assets/styles.js'
import axios from 'axios'

const {useState} = React;

//handlers
const Helpful = ({helpfulCount, id, shouldFetchQ, setShouldFetchQ}) => {

  const [helpful, setHelpful] = useState(helpfulCount)
  const [voted, setVoted] = useState(true);
  const helpfulOnclick = () => {
    console.log('id', id)
    const config = {params: {question_id: id}}
    axios.put('/qa/questions/:question_id/helpful', {}, config)
    .then((success) => {
      // setShouldFetchQ(!shouldFetchQ)
      setVoted(false)
      setHelpful(helpful+1)
    })
    .catch((error) => {

    })

  }

//component
return (

  <span> {`Helpful|`}
    <HelpfulButton>
    { voted ? <u className='underlined' onClick={helpfulOnclick}>Yes</u> : <u>Already Voted</u>}
    </HelpfulButton>
    {`${helpful}|`}
    <HelpfulButton> Report</HelpfulButton>
  </span>

)
}

Helpful.propTypes = {
  helpfulCount  : PropTypes.number,
  id: PropTypes.number,
  shouldFetchQ: PropTypes.bool,
  setShouldFetchQ: PropTypes.func
}

export default Helpful