import React from 'react'
import styled from 'styled-components'
import {PropTypes} from 'prop-types'
import {ModalBackground, ModalStyle, ModalWrapper, ModalContent, CloseModalButton, ModalForm} from './assets/styles.js'
import axios from 'axios'


const {useState, useRef} = React;

const Modal = ({openModal, productId, setProductId, setShowModal, shouldFetchQ, setShouldFetchQ}) => {

  //state & refs
  const questionRef = useRef(null)
  const nicknameRef = useRef(null)
  const emailRef = useRef(null)

  //handler & helpers
  const newPostObj = (question, nickname, email, productID, shouldFetchQ, setShouldFetchQ) => {
    const dataObj = {
      body: question,
      name: nickname,
      email: email,
      product_id: productID
    }
    return dataObj;
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const dataObj = newPostObj(questionRef.current.value, nicknameRef.current.value, emailRef.current.value, parseInt(productId))

    axios.post('/qa/questions', dataObj)
    .then((res)=>{
      setShowModal(false)
      setShouldFetchQ(!shouldFetchQ)
    })
    .catch((err)=>{

    })

  }

  //component
  return (
    <>
        <ModalBackground>
          <ModalWrapper>
            <ModalContent>
              <h2>Have a Question?</h2>
              <ModalForm onSubmit={(e) => {handleSubmit(e)}}  >
                <span className='formSpan'>Your Question *</span>
                <textarea type='text' className='formTextArea' maxLength='1000' ref={questionRef}></textarea>
                <span className='formSpan'>Your Nickname *</span>
                <input type='text' className='formInput'  maxLength='60' placeholder='Example: WickedCool1337' ref={nicknameRef}></input>
                <span className='formSpan'placeholder>Your Email *</span>
                <input type='text' className='formInput'  maxLength='60' placeholder='Why did you like the product?' ref={emailRef}></input>
                <span className='finalSpan'>For authentication reasons, you will not be emailed</span>
                <button className='submit'>Submit</button>
              </ModalForm>
            </ModalContent>
            <CloseModalButton aria-label='Close modal' onClick={openModal}/>
          </ModalWrapper>
        </ModalBackground>
    </>
  )
}

//proptypes
Modal.propTypes = {
  openModal: PropTypes.func,
  productId: PropTypes.string,
  setProductId: PropTypes.func,
  setShowModal: PropTypes.func,
  shouldFetchQ: PropTypes.bool,
  setShouldFetchQ: PropTypes.func,
}

export default Modal;



