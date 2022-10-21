import React from 'react';
<<<<<<< HEAD
import Review from './review/Review.jsx';

const { useState, useEffect } = React;
=======
import Related from './related_items/Related_items.jsx';
const {useState, useEffect} = React;
import Overview from './overview/Overview.jsx';
>>>>>>> dd8500097d2aca34f63e17f5dd65bd4a34c554e4

function App() {
  return (
<<<<<<< HEAD
    <>
      <h1>checking again to see that this loads</h1>
      <Review />
    </>
  );
=======
    <div>
      <Overview />
      <Related />
    </div>
  )
>>>>>>> dd8500097d2aca34f63e17f5dd65bd4a34c554e4
}

export default App;
