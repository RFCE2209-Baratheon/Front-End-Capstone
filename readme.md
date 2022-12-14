
# Baratheon Retail


## Overview
A retail website fufulling an intensive business requirement document as provided by a client. The website provides functionality for browsing/shopping a number of available products hosted on a third-party API.

This application comes out of the box ready to host.

## Table of Contents
* [Team](https://github.com/RFCE2209-Baratheon/Front-End-Capstone/edit/main/readme.md#team)
* [Tech Stack](https://github.com/huongnguyen04/dinner-party/blob/main/README.md#tech-stack)  
* [Product Features](https://github.com/huongnguyen04/dinner-party/blob/main/README.md#product-features)  
* [Installation](https://github.com/huongnguyen04/dinner-party/blob/main/README.md#installation)  


## Team
* Huong Nguyen - [Product Overview](https://github.com/RFCE2209-Baratheon/Front-End-Capstone/tree/overview6#product-overview)
* Mario Valencia - [Related Products](https://github.com/RFCE2209-Baratheon/Front-End-Capstone/tree/overview6#related-products)
* Andrew Arsenault - [Questions & Answers](https://github.com/RFCE2209-Baratheon/Front-End-Capstone/tree/overview6#questions--answers)
* Brian Stern - [Ratings & Reviews](https://github.com/RFCE2209-Baratheon/Front-End-Capstone/tree/overview6#ratings--reviews)


## Tech Stack
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)
![Babel](https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)

## Product Features

### Website Overview
![](./readMeGifs/website.gif)

Toggle Theme
![](./readMeGifs/themeToggle.gif)

## Product Overview

Product Image Carousel
![](./readMeGifs/overviewCarousel.gif)

Product Image Magnification
![](./readMeGifs/overviewExpandedView.gif)

Style Selector
![](./readMeGifs/overviewStyleSelector.gif)

Add Product to Cart
![](./readMeGifs/overviewAddToCart.gif)

## Related Products

Related Product Selector
![](./readMeGifs/relatedProductChange.gif)

Related Products Cards
![](./readMeGifs/relatedCardAnimation.gif)

Related Products Carousel
![](./readMeGifs/relatedCardsCarousel.gif)

Outfit Creation
![](./readMeGifs/relatedOutfitCreation.gif)


## Questions & Answers

Load More Questions
![](./readMeGifs/qaLoadQuestions.gif)

View Answers to Questions
![](./readMeGifs/qaViewAnswers.gif)

Search Questions and Answers
![](./readMeGifs/qaSearch.gif)

Vote Helpfulness of Question
![](./readMeGifs/qaHelpfulVote.gif)

Report Question
![](./readMeGifs/qaReportQuestion.gif)

Add a Question
![](./readMeGifs/qaAddQuestion.gif)

## Ratings & Reviews

Load More Reviews
![](./readMeGifs/reviewLoadMoreReviews.gif)

Vote Helpfulness of Review
![](./readMeGifs/reviewsVoteHelpful.gif)

Sort Reviews by Category
![](./readMeGifs/reviewsSort.gif)

Sort Reviews by Rating
![](./readMeGifs/reviewsSortByRating.gif)

Add a Review

![](./readMeGifs/reviewsAddReview.gif)

## Installation

### Starting the web application

Ensure that you have node working on version 16.8.2 or higher. If you do not you can install it here https://nodejs.org/en/download/


#### Running in Production
>To run the build package in production mode run the following

```
npm run build
```
#### Running in Development
>To run the build package in development mode run the following commands npm start

```
npm run start
```


#### Hosting

> Configuring the server

After you have built the project you may host locally or externally on a third-party hosting service.

The server, by default, is hosted locally on port 3000. Be sure that this port is available or configure it in the server/index.js file.

Additionally you will need to provide a github access token in order to request data from the API. This is stored in a config.js file in the main directory. The format to the config.js file should look something like the one below.

module.exports = { TOKEN: 'MyGitHubAPItoken' }

To run this locally simply run the follow command

```
npm run server-dev
```


### Requirements
(https://nodejs.org/en/download/)
