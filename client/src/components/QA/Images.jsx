import React from 'react'
import {ImagesStyled} from './assets/styles.js'
const Images = ({images}) => {


  //component
  return (
    <div>
      {images.map(function(url, index){
        return <ImagesStyled src={`${url}`} key={index}></ImagesStyled>
      })}
    </div>
  )

}

export default Images;