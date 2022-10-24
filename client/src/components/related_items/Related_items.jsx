import React, { useState, useEffect } from 'react';
import RelatedBlock from './RelatedBlock.jsx';
import OutfitBlock from './OutfitBlock.jsx';

const Related = function ({productId, setProductId}) {

  return (
    <div>
      <RelatedBlock productId={productId} setProductId={setProductId} />
      <OutfitBlock />
    </div>
  );
};

export default Related;
