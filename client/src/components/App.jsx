import React, {useState, useEffect} from 'react';
import QA from './QA/QA.jsx'
import Review from './review/Review.jsx';
import Related from './related_items/Related_items.jsx';
import Overview from './overview/Overview.jsx';
import {AppStyle} from './QA/assets/styles.js'
import axios from 'axios';

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

      {productId && <Overview className='Overview' productId={productId}></Overview>}
      <Related className='Related' />
      {productId && <QA className='QA' productID={productId} />}
      <Review className='Review'/>
      </>

  );
}

export default App;
