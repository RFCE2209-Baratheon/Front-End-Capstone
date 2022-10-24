import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { ModalWrapper, ModalCloseBtn, TableValues, TableModal, ModalBackground } from './Assets/comparisonWidget.style.js';

const ComparisonModal = function ({ productName, category, features, productId, setProductId, openCompModal }) {
  const [mainProductInfo, setMainProductInfo] = useState({});
  const [joinedFeatures, setJoinedFeatures] = useState([]);


  useEffect(() => {
    axios.get(`/products/${productId}`)
      .then((productInfo) => {
        const data = productInfo.data.features;
        setMainProductInfo(productInfo.data);
        setJoinedFeatures(features.concat(data));
      })
  }, [productId]);

  const joinFeatures = function () {
    // let noDuplicates = (array, prop) => {
    //   return [...new Map(array.map((m) => [m[prop], m])).values()];
    // }
    // console.log(noDuplicates(joinedFeatures, 'feature'));
    let noDups = {};

    return joinedFeatures.map((each) => {
    let basicFeature = each.feature;
    let cardFeature = features.find((item) => {return item.feature === basicFeature});
    let mainFeature = mainProductInfo.features.find((item) => {return item.feature === basicFeature});

    // console.log('this is the basic feature: ', basicFeature);
    // console.log('cardFeatures is this one : ', cardFeature);
    // console.log('and finally this is the main feature : ', mainFeature);
    if(noDups[basicFeature]) {
      return;
    } else if (cardFeature && mainFeature) {
      noDups[basicFeature] = 1;
      return (
        <TableValues>
          <td>{cardFeature.value}</td>
          <td>{basicFeature}</td>
          <td>{mainFeature.value}</td>
        </TableValues>
      )
    } else if (cardFeature) {
      noDups[basicFeature] = 1;
      return (
        <TableValues>
          <td>{cardFeature.value}</td>
          <td>{basicFeature}</td>
          <td>-</td>
        </TableValues>
      )
    } else {
      noDups[basicFeature] = 1;
      return (
        <TableValues>
          <td>-</td>
          <td>{basicFeature}</td>
          <td>{mainFeature.value}</td>
        </TableValues>
      )
    }
    });
  };


  return (
    <ModalWrapper>
    <ModalCloseBtn onClick={openCompModal}/>
      <TableModal>
        <caption>
          Comparing
        </caption>
        <thead>
          <tr>
            <th>{productName}</th>
            <th> CHARACTERISTIC</th>
            <th> {mainProductInfo.name}</th>
          </tr>
        </thead>
        <tbody>
            {joinFeatures()}
        </tbody>
      </TableModal>

    </ModalWrapper>
  );
};

ComparisonModal.propTypes = {
  productName: PropTypes.string,
  category: PropTypes.string,
  features: PropTypes.string,
  productId: PropTypes.string,
  setProductId: PropTypes.func,
}

export default ComparisonModal;