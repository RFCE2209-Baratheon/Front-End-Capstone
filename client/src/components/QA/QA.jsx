
import React from 'react';
import QuestionList from './QuestionList.jsx';
import {PropTypes} from 'prop-types'
const QA = ({productID}) => { return (<QuestionList productID={productID}  />) };



QA.propTypes = {
  productID: PropTypes.number,
}

export default QA;
