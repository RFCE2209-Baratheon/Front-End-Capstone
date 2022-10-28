import React, { useState, useEffect, createContext } from 'react';
import QA from './QA/QA.jsx'
import Review from './review/Review.jsx';
import Related from './related_items/Related_items.jsx';
import Overview from './overview/Overview.jsx';
import axios from 'axios';
import styled from 'styled-components';
import logo from '../assets/logo-white-black-transparent.png'
import { AppStyle } from '../assets/styles.js'
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./Theme.js"
import Toggler from './Toggler.jsx';

const StyledBanner = styled.div`
  display: flex;
  flex-direction: row;
  height: auto;
  width: 100%;
  z-index: 1;
`

const StyledFooter = styled(StyledBanner)`
  height: 200px;
`

const StyledLogo = styled.div`
  display: flex;
  width: 200px;
  height: 200px;
  padding: 5px 5px 5px;
  color: #F4F4F9;
  z-index: 3;
`

const StyledToggler = styled.div`
  margin-left: auto;
  padding: 50px;
`

const Logo = styled.img`
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
      console.log('Successfully posted to database!')
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

  const [theme, setTheme] = useState('light');

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
    console.log('theme set to: ', theme)
}

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
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
      <StyledBanner className="banner">
        <StyledLogo><Logo src={logo}></Logo></StyledLogo>
        <StyledToggler>
          <Toggler theme={theme} toggleTheme={themeToggler}/>
        </StyledToggler>
      </StyledBanner>
      <AppStyle/>

      <div className="app">
        {productId && <Overview className='Overview' productId={productId} average={average} reviews={allReviews.length}></Overview>}
        {productId && <Related productId={productId} setProductId={setProductId} />}
        {productId && <QA className='QA' productID={productId} />}
        {productId && <Review reviews={reviews} setReviews={setReviews} allReviews={allReviews} setAllReviews={setAllReviews} average={average} setAverage={setAverage} productName={productName} productId={productId} className='Review'/>}
      </div>
      <StyledFooter className="banner"></StyledFooter>
      </>
    </ThemeProvider>
  );
}

export default App;
export const interactionContext = createContext(postInteraction)
