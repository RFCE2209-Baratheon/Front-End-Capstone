import React from 'react'
import {PropTypes} from 'prop-types'

const AddQuestion = ({openModal}) => {

  const handleClick = () => {
    openModal()
  }

  return (
  <button onClick={handleClick}> Add a question </button>
  )


}

AddQuestion.propTypes = {

  openModal: PropTypes.func,

}

export default AddQuestion;