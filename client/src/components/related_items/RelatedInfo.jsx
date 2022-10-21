import React from 'react';
import RelatedCard from './RelatedCard.jsx';

const RelatedInfo = function ({ dataCompiled, setDataCompiled }) {
  const mappedData = dataCompiled.map((dataObj, idx) => {
    let category = dataObj.category;
    let productName = dataObj.name;
    let price = dataObj.results[0].original_price;
    let image = dataObj.results[0].photos[0].thumbnail_url;
    let salePrice = dataObj.results[0].sale_price;

    return <RelatedCard category={category} productName={productName} price={price} image={image} salePrice={salePrice} key={idx} />;
  });

  return (
    <div>
      {mappedData}
    </div>
  )
};

export default RelatedInfo;
