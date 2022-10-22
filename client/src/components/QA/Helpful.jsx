import React from 'react'
import {PropTypes} from 'prop-types'
import {HelpfulButton} from './assets/styles.js'
import axios from 'axios'

const {useState} = React;

//handlers
const Helpful = ({helpfulCount, id, handler}) => {

  const [helpful, setHelpful] = useState(helpfulCount)
  const [voted, setVoted] = useState(true);

  const helpfulOnclick = () => {
    handler(id)
    setVoted(false)
    setHelpful(helpful+1)
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
  handler: PropTypes.func
}

export default Helpful