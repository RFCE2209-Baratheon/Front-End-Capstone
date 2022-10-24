/* eslint-disable arrow-body-style */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  RelatedBlockContainer, LeftArrow, RightArrow,
} from './Assets/comparisonWidget.style.js';
import RelatedInfo from './RelatedInfo.jsx';
import RelatedCard from './RelatedCard.jsx';
import staticData from '../../example_data/relatedProductStyles.json';
import exampleOfProducts from '../../example_data/relatedProductStyles.json';
import './Assets/myStyle.css';

const RelatedBlock = function ({ productId, setProductId }) {
  const [leftArrow, setLeftArrow] = useState(0);
  const [rightArrow, setRightArrow] = useState(0);
  const [relatedArray, setRelatedArray] = useState([]);
  const [productInfo, setProductInfo] = useState([]);
  const [styleInfo, setStyleInfo] = useState([]);
  const [dataCompiled, setDataCompiled] = useState([]);


  // const fetchData = function () {
  //   axios.get(`/products/${mainId}/related`)
  //     .then((relatedArray) => {
  //       const relatedIds = relatedArray.data;
  //       axios.all(relatedIds.map((productId) => {
  //         return axios.get(`/products/${productId}`);
  //       }))
  //         .then((showMe) => {
  //           console.log(showMe);
  //         });
  //     });
  // };

  const fetchData = function () {
    axios.get(`/products/${productId}/related`)
      .then((results) => {
        setRelatedArray(results.data);
      })
      // .then(() => {
      //   axios.get(`/products/${id}`)
      //   .then((singleProduct) => {
      //     arrayOfProducts.push(singleProduct.data);
      //   })
      // })
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
  // console.log(styleInfo);

  // useEffect(() => {
  //   const farRight = document.getElementById('slider').scrollWidth - document.getElementById('slider').clientWidth;
  //   setRightArrow(farRight);
  // }, [rightArrow]);

  useEffect(() => {
    fetchData();
  }, [productId]);

  useEffect(() => {
    fetchProducts();
  }, [relatedArray]);

  useEffect(() => {
    fetchStyles();
  }, [productInfo]);

  useEffect (() => {
    const farRight = document.getElementById('slider').scrollWidth - document.getElementById('slider').clientWidth;
    setRightArrow(farRight);
  }, [dataCompiled]);

  // useEffect(() => {
  //   console.log(styleInfo);
  // }, [styleInfo]);

  // const imageData = staticData.map((product, idx) => {
  //   const productImage = product.results[0].photos[0].thumbnail_url;

  //   return <RelatedCard productImage={productImage} key={idx} />;
  // });

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



  // useEffect(() => {
  //   const products = [37330, 37955, 37458, 38296, 38245, 37508];
  //   const dataArray = [];
  //   for (let i = 0; i < products.length; i += 1) {
  //     const product = products[i];
  //     axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${product}/styles`, {
  //       headers: {
  //         Authorization: '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',
  //       },
  //     })
  //       .then((data) => {
  //         console.log(data.data);
  //       });
  //   }
  // }, []);

  return (
    <div>
      <h3>Related Products</h3>
      <RelatedBlockContainer>
        {leftArrow === 0 ? <></> : <LeftArrow onClick={slideLeft} />}
        <div id="slider">
          {/* {imageData} */}
          <RelatedInfo dataCompiled={dataCompiled} setDataCompiled={setDataCompiled} productId={productId} setProductId={setProductId} />
        </div>
        {leftArrow === rightArrow ? <></> : <RightArrow onClick={slideRight} />}
      </RelatedBlockContainer>
    </div>
  );
};

export default RelatedBlock;
