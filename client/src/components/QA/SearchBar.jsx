import React from 'react'
import {SearchBarStyle, SearchBarWrapper} from './assets/styles.js'

const {useState} = React;

const SearchBar = ({questions, setRenderQ, renderQ}) => {
  // let sorted = [];
  // const showText = (e) => {
  //   e.preventDefault()
  //   if(e.target.value.length >= 3) {
  //     sorted = questions.filter(function(question, index) {
  //       if(question.question_body.includes(e.target.value)) {
  //         return question.question_body
  //       }
  //     })
  //     setRenderQ(sorted)
  //     }
  //   }



  return (
    <SearchBarWrapper>
      <SearchBarStyle type='text' placeholder='Have a question, search for answers'/>
    </SearchBarWrapper>
  );

}

export default SearchBar