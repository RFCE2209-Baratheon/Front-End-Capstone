import React from 'react'
import {PropTypes} from 'prop-types'

const AddQuestion = ({loadMore, openModal}) => {

  const handleClick = () => {
    loadMore()
    openModal()
  }

  return (
  <button onClick={handleClick}> Add a question </button>
  )


}

AddQuestion.propTypes = {

  loadMore: PropTypes.func,
  openModal: PropTypes.func,

}

export default AddQuestion;