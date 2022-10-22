import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {ModalWrapper} from './Assets/comparisonWidget.style.js';

const ComparisonModal = function ({productName, category, features, productId, setProductId}) {
  const [mainProductInfo, setMainProductInfo] = useState({});

  useEffect(() => {
    axios.get(`/products/${productId}`)
      .then((productInfo) => {
        setMainProductInfo(productInfo.data);
      })
  }, [productId]);

  const joinFeatures = function () {

  };

  return (
    <>
      <ModalWrapper>
        <table>
          <caption>
          Comparing
          </caption>
          <thead>
            <tr>
              <th scope="col">{productName}</th>
              <th scope="col"> CHARACTERISTIC</th>
              <th scope="col"> {mainProductInfo.name}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row"> {features[0].feature}</th>
            </tr>
          </tbody>
        </table>

      </ModalWrapper>
    </>
  );
};

export default ComparisonModal;