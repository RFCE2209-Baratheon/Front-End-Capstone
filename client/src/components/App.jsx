import React, {useState, useEffect} from 'react';
import QA from './QA/QA.jsx'
import Review from './review/Review.jsx';
import Related from './related_items/Related_items.jsx';
import Overview from './overview/Overview.jsx';
import axios from 'axios';
import GlobalStyle from '../globalStyles.js';

const {createContext} = React

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

  return (
    <div>
      <GlobalStyle />
      {productId && <Overview productId={productId} />}
      <Related />
      {productId && <QA productID={productId} />}
      <Review />
    </div>
  );

}

export default App;
export const interactionContext = createContext(postInteraction)
