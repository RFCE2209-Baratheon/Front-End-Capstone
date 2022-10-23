import React from 'react'
import {PropTypes} from 'prop-types'

const AddQuestion = ({openModal}) => {
//hooks & handlers
  const handleClick = () => {
    openModal()
  }
//component
  return (
  <button className='addQuestion'onClick={handleClick}> Add a question </button>
  )


}
//propTypes
AddQuestion.propTypes = {

  openModal: PropTypes.func,

}

export default AddQuestion;