import React from 'react';
import QA from './QA/QA.jsx'
import Review from './review/Review.jsx';
import Related from './related_items/Related_items.jsx';
import Overview from './overview/Overview.jsx';
import axios from 'axios';

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



  //handlers

  // postInteraction("h1", "overview", "http://localhost:3000/");


  // console.log('date: ', new Date());
  return (
    <div>
      <div className="overview"><Overview/></div>
      <Related />
      <QA />
      <Review />
    </div>
  );
}

export default App;
export const interactionContext = createContext(postInteraction)
