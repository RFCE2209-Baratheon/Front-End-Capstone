const express = require('express')
// const compression = require('compression')
const path = require('path');
const app = express();
const axios = require('axios');
const config = require('../config.js');
const requestConfig = {
  headers: {'Authorization': config.TOKEN}
}
const noCompressionConfig = {
  headers: {'Authorization': config.TOKEN, 'x-no-compression': true}
}



const filterGzip = () => {
  if (req.headers['x-no-compression']) {
    return false
  }

  return compression.filter(req, res)
}
const api = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe';



// app.use(compression({level:6, threshold: 0}))
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json())

app.listen(3000);


/*Q&A Route Handlers*/

// QuestionList
// Get questions
// Get questions for the given product

// Get/qa/questions



/*Q&A Route Handlers*/

// QuestionList
// Get questions
// Get questions for the given product

// Get/qa/questions
app.get('/qa/questions', (req, res) => {

  const newrequestConfig = {
    params: req.query,
    headers: {'Authorization': config.TOKEN}
  }

  axios.get(`${api}/qa/questions`, newrequestConfig)
  .then((response)=> {
    res.json(response.data)
  })
  .catch((err)=>{
    console.log(err)
  })

})

// Answers List
// Returns answers for a given question. This list does not include any reported answers.

// GET /qa/questions/:question_id/answers
app.get('/qa/questions/:question_id/answers', (req, res) => {

  axios.get(`${api}/qa/questions/${req.params.question_id}/answers`, requestConfig )
  .then((response)=>{
    res.send(response.data)
  })
  .catch((error)=>{
    console.log(error)
  })
})

// Add a Question
// Adds a question for the given product

// POST /qa/questions
app.post('/qa/questions/', (req, res) => {

  axios.post(`${api}/qa/questions`, req.body, noCompressionConfig)
  .then((response)=> {
    res.sendStatus(response.status)
  })
  .catch((err)=>{
    console.log('WE ARE HAVING SOME ISSUES!', err)
  })
})

// Add an Answer
// Adds an answer for the given question

// POST /qa/questions/:question_id/answers
app.post('/qa/questions/:question_id/answers', (req, res) => {

  let id = parseInt(req.query.question_id)

  axios.post(`${api}/qa/questions/${id}/answers`, req.body, noCompressionConfig)
  .then((response)=> {
    res.sendStatus(response.status)
  })
  .catch((err)=>{
    console.log('WE ARE HAVING SOME ISSUES!', err)
  })
});
// Mark Question as Helpful
// Updates a question to show it was found helpful.

// PUT /qa/questions/:question_id/helpful
app.put('/qa/questions/:question_id/helpful', (req, res) => {
  // {params: {question_id: id}}
  let number = req.query.question_id

  axios.put(`${api}/qa/questions/${number}/helpful`, {}, noCompressionConfig)

  .then((success) => {
    console.log('succesfully put route for helpful questions')
    res.end()
  })
  .catch((error) => {
    console.log('error in put route for helpful questions', error)
  })
});
// Report Question
// Updates a question to show it was reported. Note, this action does not delete the question, but the question will not be returned in the above GET request.

// PUT /qa/questions/:question_id/report
app.put('/qa/questions/:question_id/report', (req, res) => {

  let number = req.query.question_id

  axios.put(`${api}/qa/questions/${number}/report`, {}, noCompressionConfig)

  .then((success) => {
    console.log('succesfully put route for report questions')
    res.end()
  })
  .catch((error) => {
    console.log('error in put route for report questions', error)
  })
});
// Mark Answer as Helpful
// Updates an answer to show it was found helpful.

// PUT /qa/answers/:answer_id/helpful
app.put('/qa/answers/:answer_id/helpful', (req, res) => {

  let number = req.query.answer_id

  axios.put(`${api}/qa/answers/${number}/helpful`, {}, noCompressionConfig)

  .then((success) => {
    console.log('succesfully put route for helpful answers')
    res.end()
  })
  .catch((error) => {
    console.log('error in put route for helpful answers', error)
  })
});
// Report Answer
// Updates an answer to show it has been reported. Note, this action does not delete the answer, but the answer will not be returned in the above GET request.

// PUT /qa/answers/:answer_id/report
app.put('/qa/answers/:answer_id/report', (req, res) => {
  let number = req.query.answer_id

  axios.put(`${api}/qa/answers/${number}/report`, {}, noCompressionConfig)

  .then((success) => {
    console.log('succesfully put route for report answer')
    res.end()
  })
  .catch((error) => {
    console.log('error in put route for report answer', error)
  })
});

// product detail handlers
app.get('/products', (req, res) => {
  axios.get(`${api}/products`, requestConfig)
  .then((response) => {
    res.send(response.data);

  })
  .catch((error) => {
    res.status(500);
  });
});

app.get('/products/:product_id', (req, res) => {
  let itemId = req.params.product_id;
  axios.get(`${api}/products/${itemId}`, requestConfig)
    .then((productInfo) => {
      res.send(productInfo.data);
    })
    .catch((error) => {
      res.status(500);
    });
});

app.get('/products/:product_id/styles', (req, res) => {
  let itemId = req.params.product_id;
  axios.get(`${api}/products/${itemId}/styles`, requestConfig)
    .then((styles) => {
      res.send(styles.data);
    })
    .catch((error) => {
      res.status(500);
    })
});

app.get('/products/:product_id/related', (req, res) => {
  let itemId = req.params.product_id;
  axios.get(`${api}/products/${itemId}/related`, requestConfig
  )
    .then((relatedItems) => {
      res.send(relatedItems.data);
    })
    .catch((error) => {
      res.status(500);
    });
});

app.post('/cart', (req, res) => {
  var id = req.body.sku_id;
  axios.post(`${api}/cart`, {sku_id: id}, noCompressionConfig)
  .then((response)=> {
    res.sendStatus(response.status);
  })
  .catch((err)=>{
    console.log('Error, cannot post to cart. Error: ', err)
  })
});

// Rating and Reviews
app.get('/reviews/', (req, res) => {
  axios.get(`${api}/reviews`, { params: { product_id: req.query.product_id, sort: req.query.sort, count: 5000 }, headers: { Authorization: config.TOKEN } })
    .then((response) => {
      res.json(response.data);
    });
});

app.get('/reviews/meta', (req, res) => {
  axios.get(`${api}/reviews/meta`, { params: { product_id: req.query.product_id }, headers: { Authorization: config.TOKEN } })
    .then((response) => {
      res.json(response.data);
    });
});

app.post('/reviews', (req, res) => {

  axios.post(`${api}/reviews`, req.body, requestConfig)
    .then((response) => {
    })
    .catch((error) => {
      console.log(error);
    });
});

app.put('/reviews', (req, res) => {

  axios.put(`${api}/reviews/1275306/helpful`, requestConfig)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.put('reviews/:review_id/report/', (req, res) => {

});

app.post('/interactions', (req, res) => {
  axios.post(`${api}/interactions`, req.body, requestConfig)
    .then((response) => {
      res.sendStatus(response.status);
    })
    .catch((error) => {
      console.log('Error posting to API');
    });
})

// app.get("*", (req, res) => {
//   res.sendFile(clientIndexHtml);
// });
console.log("Starting server");
