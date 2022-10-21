import React from 'react';
import Related from './related_items/Related_items.jsx';
const {useState, useEffect} = React;
import Overview from './overview/Overview.jsx';

const App = () => {
  return (
    <div>
      <Overview />
      <Related />
    </div>
  )
}

export default App;
