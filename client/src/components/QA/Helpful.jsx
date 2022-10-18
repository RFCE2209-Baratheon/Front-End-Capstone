import React from 'react'
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
  {`${helpful}`} | <u>Report</u>
</span>
)
}

export default Helpful