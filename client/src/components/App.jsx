import React from 'react';
import QA from './QA/QA.jsx'
import Review from './review/Review.jsx';
import Related from './related_items/Related_items.jsx';
import Overview from './overview/Overview.jsx';


function App() {
  return (
    <div>
      <Overview />
      <Related />
      <QA />
      <Review />
    </div>
  );
}

export default App;
