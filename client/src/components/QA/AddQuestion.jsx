import React from 'react'
import {PropTypes} from 'prop-types'

const AddQuestion = ({openQModal}) => {
//hooks & handlers
  const handleClick = () => {
    openQModal()
  }
//component
  return (
  <button className='addQuestion'onClick={handleClick}> Add a question </button>
  )


}

//propTypes
AddQuestion.propTypes = {

  openQModal: PropTypes.func,

}

export default AddQuestion;