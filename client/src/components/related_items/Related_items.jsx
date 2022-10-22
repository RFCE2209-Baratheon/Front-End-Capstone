import React, { useState, useEffect } from 'react';
import RelatedBlock from './RelatedBlock.jsx';
import OutfitBlock from './OutfitBlock.jsx';

const Related = function () {
  let mainId = 37890;

  return (
    <div>
      <RelatedBlock mainId={mainId} />
      <OutfitBlock />
    </div>
  );
};

export default Related;
