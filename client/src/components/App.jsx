import React, {useState, useEffect} from 'react';
import QA from './QA/QA.jsx'
import Review from './review/Review.jsx';
import Related from './related_items/Related_items.jsx';
import Overview from './overview/Overview.jsx';
import axios from 'axios';
import {AppStyle} from '../assets/styles.js'
const {createContext} = React


//data-tracker
const postInteraction = (element, widget, time) => {

  let dataObj = {
    element: element,
    widget: widget,
    time: time
  }

  axios.post('/interactions', dataObj)
    .then((success) => {
      console.log(`Posted element: ${element} widget: ${widget} time: ${time}`)
    })
    .catch((error) => {
      console.log('Error posting interaction data')
    })
}

function App() {
  const [productId, setProductId] = useState(null);

  useEffect(() => {
    axios.get('/products')
      .then((response) => {
        // set default data to first product
        setProductId(parseInt(response.data[0].id));
      })
      .catch((error) => {
        console.log('error, could not get products from api. error: ', error)
      });
  }, [])

  console.log('Loading App.jsx with pid: ', productId)

  return (
    <>
    <AppStyle>

      {productId && <Overview className='Overview' productId={productId}></Overview>}
      <Related className='Related' />
      {productId && <QA className='QA' productID={productId} />}
      <Review className='Review'/>

    </AppStyle>
    </>

  );
}


export default App;
export const interactionContext = createContext(postInteraction)
