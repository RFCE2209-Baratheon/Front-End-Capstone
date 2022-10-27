import React, {useState, useEffect} from 'react';
import QA from './QA/QA.jsx'
import Review from './review/Review.jsx';
import Related from './related_items/Related_items.jsx';
import Overview from './overview/Overview.jsx';
import axios from 'axios';
import {AppStyle} from '../assets/styles.js'
import styled from 'styled-components';
// import logo from '../assets/logo-light.png';
import logo from '../assets/logo-white-black-transparent.png'

const {createContext} = React

const StyledBanner = styled.section`
  height: auto;
  width: 100%;
  height: auto;
  background: #62929E;
  z-index: 1;
`

const StyledLogo = styled.div`
  display: flex;
  // background-size: contain;
  width: 200px;
  height: 200px;
  // border-radius: 50%
  // overflow: hidden;
  padding: 5px 5px 5px;
  color: #F4F4F9;
  z-index: 3;
  transform: scale(1.5)
`

const Logo = styled.img`
  // border: solid 1px #F4F4F9;
  // border-radius: 50%;
  z-index: 4;
`

//data-tracker
const postInteraction = (element, widget, time) => {

  let dataObj = {
    element: element,
    widget: widget,
    time: time
  }

  axios.post('/interactions', dataObj)
    .then((success) => {

    })
    .catch((error) => {
      console.log('Error posting interaction data')
    })
}

function App() {
  const [productId, setProductId] = useState(null);
  const [productName, setProductName] = useState('');
  const [average, setAverage] = useState(1);
  const [reviews, setReviews] = useState([]);
  const [allReviews, setAllReviews] = useState([]);



  useEffect(() => {
    axios.get('/products')
      .then((response) => {
        // set default data to first product
        setProductId(parseInt(response.data[0].id));
        setProductName(response.data[0].name);
      })
      .catch((error) => {
        console.log('error, could not get products from api. error: ', error)
      });
  }, []);



  console.log('Loading App.jsx with pid: ', productId)

  return (
    <>
    <StyledBanner>
      <StyledLogo><Logo src={logo}></Logo></StyledLogo>

      {/* Logo Goes Here */}

    </StyledBanner>
    <AppStyle>
      {productId && <Overview className='Overview' productId={productId} average={average} reviews={allReviews.length}></Overview>}
      {productId && <Related productId={productId} setProductId={setProductId} />}
      {productId && <QA className='QA' productID={productId} />}
      {productId && <Review reviews={reviews} setReviews={setReviews} allReviews={allReviews} setAllReviews={setAllReviews} average={average} setAverage={setAverage} productName={productName} productId={productId} className='Review'/>}

    </AppStyle>
    </>

  );

}


export default App;
export const interactionContext = createContext(postInteraction)
