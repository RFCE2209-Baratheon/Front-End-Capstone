const path = require('path');
const express = require('express'); // npm installed
const axios = require('axios');
const config = require('../config.js');

const app = express();

app.use(express.static(path.join(__dirname, '../public')));
// other configuration...
app.use(express.json());
app.listen(3000);

// Q&A Route Handlers

// Answers List
// Returns answers for a given question. This list does not include any reported answers.

// GET /qa/questions/:question_id/answers
app.get('/qa/questions/:question_id/answers', (req, res) => {

});

// Add a Question
// Adds a question for the given product

// POST /qa/questions
app.post('/qa/questions', (req, res) => {

});
// Add an Answer
// Adds an answer for the given question

// POST /qa/questions/:question_id/answers
app.post('/qa/questions/:question_id/answers', (req, res) => {

});
// Mark Question as Helpful
// Updates a question to show it was found helpful.

// PUT /qa/questions/:question_id/helpful
app.put('/qa/questions/:question_id/helpful', (req, res) => {

});
// Report Question
// Updates a question to show it was reported. Note, this action does not delete the question, but the question will not be returned in the above GET request.

// PUT /qa/questions/:question_id/report
app.put('/qa/questions/:question_id/report', (req, res) => {

});
// Mark Answer as Helpful
// Updates an answer to show it was found helpful.

// PUT /qa/answers/:answer_id/helpful
app.put('/qa/answers/:answer_id/helpful', (req, res) => {

});
// Report Answer
// Updates an answer to show it has been reported. Note, this action does not delete the answer, but the answer will not be returned in the above GET request.

// PUT /qa/answers/:answer_id/report
app.put('/qa/answers/:answer_id/report', (req, res) => {

});

// product detail handlers
app.get('/products', (req, res) => {

});

app.get('/products/:product_id', (req, res) => {

});

app.get('/products/:product_id/styles', (req, res) => {

});

app.get('/products/:product_id/related', (req, res) => {

});

// unsure here
app.get('/cart', (req, res) => {

});

app.post('/cart', (req, res) => {

});

// Rating and Reviews

app.get('/reviews/', (req, res) => {
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews', { params: { product_id: req.query.product_id, sort: req.query.sort, count: 5000 }, headers: { Authorization: config.TOKEN } })
    .then((response) => {
      res.json(response.data);
    });
});

app.get('/reviews/meta', (req, res) => {
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/meta', { params: { product_id: req.query.product_id }, headers: { Authorization: config.TOKEN } })
    .then((response) => {
      res.json(response.data);
    });
});

app.post('/reviews', (req, res) => {
  console.log(req.body)
  axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews', req.body, { headers: { Authorization: config.TOKEN } })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.put('reviews/:review_id/helpful/', (req, res) => {

});

app.put('reviews/:review_id/report/', (req, res) => {

});
