import React, {useState, useEffect} from 'react';
import QA from './QA/QA.jsx'
import Review from './review/Review.jsx';
import Related from './related_items/Related_items.jsx';
import Overview from './overview/Overview.jsx';
import axios from 'axios';


function App() {
  //const [mount, setMount] = useState(false);
  // const [allProducts, setAllProducts] = useState(null);
  const [productId, setProductId] = useState(null);


  useEffect(() => {
      axios.get('/products')
        .then((response) => {
         // setAllProducts(response.data);
          setProductId(parseInt(response.data[0].id));
          console.log('response: ', response)
          console.log('response.data[0].id: ', response.data[0].id)
          //setMount(true);
        })
        .catch((error) => {
          console.log('error, could not get products from api. error: ', error)
        });
  }, [])

  //console.log('all products: ', allProducts)
  console.log('id: ', productId)

  return (
    <div>
      {productId && <Overview productId={productId} />}
      {productId && <QA productID={productId} />}
    </div>
  );
}

export default App;
