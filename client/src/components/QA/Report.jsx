import React from 'react'
import {PropTypes} from 'prop-types'
import {HelpfulButton} from './assets/styles.js'

const {useState} = React

const Report = ({reportOnclick}) => {




  return (
   <HelpfulButton onClick={reportOnclick}><u>Report</u></HelpfulButton>
  )

}

Report.propTypes = {
  reportOnclick: PropTypes.func
}

export default Report;



// PUT /qa/questions/:question_id/report

// Parameters

// Parameter	Type	Description
// question_id	integer	Required ID of the question to update