
import React from 'react';
import {render, screen, cleanup} from '@testing-library/react';
import IndividualQuestion from '../IndividualQuestion.jsx';
import '@testing-library/jest-dom';

const data = {
  "question_id": 642189,
  "question_body": "does this go well with black",
  "question_date": "2022-07-18T00:00:00.000Z",
  "asker_name": "black",
  "question_helpfulness": 46,
  "reported": false,
  "answers": {
      "5987140": {
          "id": 5987140,
          "body": "jdjdjdjdjdjdjdjdjd",
          "date": "2022-07-23T00:00:00.000Z",
          "answerer_name": "dcdcdc",
          "helpfulness": 11,
          "photos": [
              "http://res.cloudinary.com/dl9zxpaoq/image/upload/v1658586930/duw3xpuh9ieugapjyrub.jpg"
          ]
      },
      "5987166": {
          "id": 5987166,
          "body": "yo",
          "date": "2022-07-23T00:00:00.000Z",
          "answerer_name": "dude",
          "helpfulness": 0,
          "photos": []
      },
      "5987886": {
          "id": 5987886,
          "body": "Yeah goes great with black",
          "date": "2022-09-02T00:00:00.000Z",
          "answerer_name": "dudeBro",
          "helpfulness": 1,
          "photos": []
      }
  }
}

test('should render Images components', ()=>{
  render(<IndividualQuestion question={data}/>);
  const IQ = screen.getByTestId('testing')
  expect(IQ).toBeInTheDocument();
})