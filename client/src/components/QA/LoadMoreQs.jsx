import React from 'react'
import {PropTypes} from 'prop-types'

const LoadMoreQs = ({loadMore}) => {


  return (
  <button className='loadMore' id='123' onClick={(e) => {loadMore(e)}}> Load more questions </button>
  )


}


LoadMoreQs.propTypes = {
  loadMore: PropTypes.func,
}

export default LoadMoreQs;