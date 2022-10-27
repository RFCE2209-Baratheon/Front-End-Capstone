import React, { useState, useEffect } from 'react';
import RelatedBlock from './RelatedBlock.jsx';
import OutfitBlock from './OutfitBlock.jsx';
import {PropTypes} from 'prop-types'
import { RelatedModuleStyle } from './Assets/comparisonWidget.style.js';



const Related = function ({productId, setProductId}) {

  /*

  // map through your product ids and do an axios call for each product id to get the meta data
  const getMetaData = () => {
    axios.get('/reviews/meta', { params: { product_id: tempProduct.id } })
      // you need to store the meta data somehow/somewhere...
      .then(getMetaSuccess)
      .catch((err) => {
        console.log(err);
      });
  };

  const calculateAverage = () => {
    let { ratings } = metaData;
    let sum = 0;
    let sumFormula = 0;
    for (const rating in ratings) {
      sumFormula += rating * ratings[rating];
      sum += Number(ratings[rating]);
    }
    setTotalReviews(sum);
    const calculatedAverage = (sumFormula / sum);
    setAverage(calculatedAverage.toFixed(1));
  };

  useEffect(() => {
    calculateAverage();
    // this useEffect will activate the calculate average once the metaData is set
  }, [metaData]);

  */

  return (
    <div style={{width: "1100px"}} data-testid = "mainComponent" >
      <RelatedBlock productId={productId} setProductId={setProductId} />
      <OutfitBlock productId={productId} setProductId={setProductId} />
    </div>
  );
};

//please review this proptype
Related.propTypes = {

  productId: PropTypes.string,
  setProductId: PropTypes.func

}

export default Related;
