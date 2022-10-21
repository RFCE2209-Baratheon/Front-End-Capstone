import React from 'react'
import {SearchBarStyle, SearchBarWrapper} from './assets/styles.js'
import {PropTypes} from 'prop-types'

const {useState, useEffect} = React;

const SearchBar = ({questions, setRenderQ, renderQ, searchedQ, setSearchedQ, enableSearchQ, setEnableSearchQ}) => {

  const [searchText, setSearchText] = useState('')

  useEffect(()=>{
    if(searchText === '') {
      setEnableSearchQ(false)
    }
  },[searchText])

  const handleSearch = (e) => {
    let currentText = e.target.value
    setSearchText(currentText)
    if (currentText.length >= 3) {
      sort(currentText)
    }
  }

  const sort = (text) => {

    const newArray = questions.filter(function(question, index) {
        if(question.question_body.includes(text)){
          return question
        }
      })
    setSearchedQ(newArray)
  }

  return (
    <SearchBarWrapper>
      <SearchBarStyle type='text' placeholder='Have a question, search for answers' onChange={(e)=>{handleSearch(e)}}/>
    </SearchBarWrapper>
  );

}

SearchBar.propTypes = {
  questions: PropTypes.array,
  setRenderQ: PropTypes.func,
  renderQ: PropTypes.array,
  searchedQ: PropTypes.array,
  setSearchedQ: PropTypes.func,
  enableSearchQ: PropTypes.bool,
  setEnableSearchQ: PropTypes.func
}

export default SearchBar