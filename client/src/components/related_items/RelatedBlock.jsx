/* eslint-disable arrow-body-style */

import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import {
  RelatedBlockContainer, LeftArrow, RightArrow,
} from './Assets/comparisonWidget.style.js';
import RelatedInfo from './RelatedInfo.jsx';
import RelatedCard from './RelatedCard.jsx';
import staticData from '../../example_data/relatedProductStyles.json';
import exampleOfProducts from '../../example_data/relatedProductStyles.json';
import {PropTypes} from 'prop-types';
import './Assets/myStyle.css';

const RelatedBlock = function ({ productId, setProductId }) {
  const [leftArrow, setLeftArrow] = useState(0);
  const [rightArrow, setRightArrow] = useState(0);
  const [scrollValue, setScrollValue] = useState(0);
  const mySlider = useRef(null);
  const [relatedArray, setRelatedArray] = useState([]);
  const [productInfo, setProductInfo] = useState([]);
  const [styleInfo, setStyleInfo] = useState([]);
  const [dataCompiled, setDataCompiled] = useState([]);

  const fetchData = function () {
    axios.get(`/products/${productId}/related`)
      .then((results) => {
        setRelatedArray(results.data);
      })

      .catch((error) => {
        console.log(error);
      });
  };

  const fetchProducts = function () {
    let arrayOfProducts = [];
    relatedArray.forEach((id) => {
      axios.get(`/products/${id}`)
        .then((singleProduct) => {
          arrayOfProducts.push(singleProduct.data);
        })
        .catch((error) => {
          console.log(error);
        });
    });
    setProductInfo(arrayOfProducts);
  };

  const fetchStyles = function () {
    // let arrayOfStyles = [];
    let arrayOfStyles = relatedArray.map((id) => {
      return axios.get(`/products/${id}/styles`)
        .then((singleProduct) => {
          return singleProduct.data;
          // arrayOfStyles.push(singleProduct.data);
        })
        .catch((error) => {
          console.log(error);
        });
    });
    Promise.all(arrayOfStyles)
      .then((styles) => {
        let data = [];
        productInfo.forEach((product) => {
          const styleData = styles.find((style) => {
            return style.product_id.toString() === product.id.toString();
          });
          const result = {
            ...product,
            ...styleData,
          };
          data.push(result);
        });
        setDataCompiled(data);
      });
  };


  useEffect(() => {
    // fetchData();
    let arrayOfRelated = [];
    axios.get(`/products/${productId}/related`)
      .then((results) => {
        arrayOfRelated = results.data;
        // setRelatedArray(results.data);
        return Promise.all(
          [
            Promise.all(arrayOfRelated.map((id) => {
              return axios.get(`/products/${id}`)
            })),
            Promise.all(arrayOfRelated.map((id) => {
              return axios.get(`/products/${id}/styles`)
            }))
          ]
        )
      })
      .then(([products, styles]) => {
        products = products.map((response) => {
          return response.data
        })
        styles = styles.map((response) => {
          return response.data
        })

        let joinedProducts = products.map((product) => {
          for(let i = 0; i < styles.length; i++) {
            if(product.id === Number(styles[i].product_id)) {

              return {...product, ...styles[i]}
            }
          }
        })
        setDataCompiled(joinedProducts)
      })
  }, [productId]);



  useEffect (() => {
    const farRight = document.getElementById('slider').scrollWidth - document.getElementById('slider').clientWidth;

    setRightArrow(farRight);
  }, [dataCompiled]);

  useEffect(() => {
    if(scrollValue === mySlider.current.scrollWidth - mySlider.current.clientWidth) {
      console.log("All the way to the right");
    } else if (mySlider.current.scrollLeft === 0){
      console.log("all the way to the right")
    }
    console.log(scrollValue);
  }, [scrollValue]);

  const slideLeft = function () {
    const slider = document.getElementById('slider');
    slider.scrollLeft -= 250;
    setLeftArrow(slider.scrollLeft);
  };

  const slideRight = function () {
    const slider = document.getElementById('slider');
    slider.scrollLeft += 250;
    setLeftArrow(slider.scrollLeft);
  };

  return (
    <div data-testid = "outerBlock">
      <h3>Related Products</h3>
      <RelatedBlockContainer>
        {leftArrow === 0 ? <></> : <LeftArrow onClick={slideLeft} />}
        <div id="slider" ref={mySlider} onScroll={(e) => {
          console.log(e.target.scrollLeft, e);
          setScrollValue(e.target.scrollLeft);
          }}>
          {/* {imageData} */}
          <RelatedInfo dataCompiled={dataCompiled} setDataCompiled={setDataCompiled} productId={productId} setProductId={setProductId} />
        </div>
        {leftArrow === rightArrow ? <></> : <RightArrow onClick={slideRight} />}
      </RelatedBlockContainer>
      </div>
  );
};

//please review this proptype
RelatedBlock.propTypes = {

  productId: PropTypes.string,
  setProductId: PropTypes.func

}

export default RelatedBlock;

