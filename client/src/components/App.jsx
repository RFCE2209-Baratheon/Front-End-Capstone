import React from 'react';
import Review from './review/Review.jsx';
import Related from './related_items/Related_items.jsx';
import Overview from './overview/Overview.jsx';

const { useState, useEffect } = React;

function App() {
  return (
    <div>
      <Overview />
      <Related />
      <Review />
    </div>
  );
}

export default App;
