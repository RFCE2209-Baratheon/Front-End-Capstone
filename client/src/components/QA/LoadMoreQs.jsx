import React from 'react'
import {PropTypes} from 'prop-types'

const LoadMoreQs = ({loadMore}) => {


  return (
  <button onClick={loadMore}> Load more questions </button>
  )


}


LoadMoreQs.propTypes = {
  loadMore: PropTypes.func,
}

export default LoadMoreQs;