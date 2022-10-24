import React from 'react';
import axios from 'axios';
import {Accordion, Wrapper, SearchBarStyle, ModalButton, ModalStyle} from './assets/styles.js'
import IndividualQuestion from './IndividualQuestion.jsx'
import SearchBar from './SearchBar.jsx'
import LoadMoreQs from './LoadMoreQs.jsx'
import Modal from './Modal.jsx'
import AddQuestion from './AddQuestion.jsx'

const { useState, useEffect } = React;

const QuestionList = ({productID}) => {

  //Local Variables
  const start = 0;
  const endStart = 4;

  // States
  const [end, setEnd] = useState(endStart)
  const [productId, setProductId] = useState(productID)
  const [renderQ, setRenderQ] = useState([])
  const [questions, setQuestions] = useState([])
  const [searchedQ, setSearchedQ] = useState([])
  const [hide, setHide] = useState(true)
  const [enableSearchQ, setEnableSearchQ] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [shouldFetchQ, setShouldFetchQ] = useState(false)

  // Hooks
  useEffect(()=> {

    console.log('setting questions')
    console.log(typeof productID)

    axios.get('/qa/questions', {params: {product_id: productId, count: 100}})
    .then((res)=>{

      if (res.data.results.length <= 4) {
        setHide(false)
      }
      setQuestions(res.data.results)
      setRenderQ(res.data.results.slice(start, end))
    })
    .catch((error)=>{
      console.error(error)
    })

  }, [productId, shouldFetchQ])
  console.log('questions', questions)

  useEffect(()=>{

    if (end !== endStart && end >= questions.length) {
      setHide(false);
    }

  }, [end])

  useEffect(()=>{
    if (searchedQ.length > 0) {
      setEnableSearchQ(true)
    }
  }, [searchedQ])

  // Handlers
  const loadMore = () => {

    if (renderQ.length <= questions.length) {

      let newEnd = end + 2
      let newResults = questions.slice(start, newEnd)
      setEnd(newEnd)
      setRenderQ(newResults)
    }
  }

  const openModal = () => {
    console.log(showModal)
    setShowModal(!showModal)
  }

  //component
  return (
    <>
    { showModal ? <Modal openModal={openModal} productId={productId} setProductId={setProductId} setShowModal={setShowModal} shouldFetchQ={shouldFetchQ} setShouldFetchQ={setShouldFetchQ}/> : <></>}
    <span> QUESTIONS & ANSWERS </span>
    <SearchBar questions={questions} setRenderQ={setRenderQ} renderQ={renderQ} searchedQ={searchedQ} setSearchedQ={setSearchedQ} enableSearchQ={enableSearchQ} setEnableSearchQ={setEnableSearchQ}/>
    <Wrapper>
      <Accordion>
      <div className="Accordion">

        {enableSearchQ ? searchedQ.map(function(question, index) {
          return (
            <IndividualQuestion key={index} question={question} open={open} index={index}/>
          )
        }) : renderQ.map(function(question, index) {
          return (
            <IndividualQuestion key={index} question={question} open={open} index={index}/>
          )
        })}
      </div>
      <AddQuestion loadMore={loadMore} openModal={openModal}/>
      {hide ? <LoadMoreQs loadMore={loadMore}/> : <></>}

      </Accordion>
    </Wrapper>
    </>

  )
}

export default QuestionList;