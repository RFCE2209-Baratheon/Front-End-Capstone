import React from 'react'
import {PropTypes} from 'prop-types'
import {HelpfulButton} from './assets/styles.js'

const {useState} = React;

//handlers
const Helpful = ({helpfulCount}) => {

  const [helpful, setHelpful] = useState(helpfulCount)

  const helpfulOnclick = () => {
    setHelpful(helpful+1)
  }

//component
return (
<span> Helpful
  <HelpfulButton>
  <u onClick={helpfulOnclick}>Yes</u>
  </HelpfulButton>
  {`${helpful}`} |
  <HelpfulButton>
  <u>Report</u>
  </HelpfulButton>
</span>
)
}

Helpful.propTypes = {
  helpfulCount  : PropTypes.number
}

export default Helpful