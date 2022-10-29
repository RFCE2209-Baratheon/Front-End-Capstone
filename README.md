# Project Name

> HackReactor FEC - Team Baratheon

# Overview

  A retail website fufulling an intensive business requirement document as provided by a client.
  The website provides functionality for browsing/shopping a number of available products hosted on a third-party API.

  

## Related Projects

  - https://github.com/RFCE2209-Baratheon

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> This application comes out of the box ready to host 

  Starting the web application:

  Ensure that you have node working on version 16.8.2 or higher.  If you do not you can install it here: 

  Once node has been installed you can run the app in either production build or development:

  To run the build package in production mode run the following commands ``
  npm run build``

  To run the build package in development mode run the following commands ``
  npm start``

  After you have built the project you may host locally or externally on a third-party hosting service.

  To run this locally simply run the follow command ``
  npm run server-dev``

  Configuring the server:

  The server, by default, is hosted locally on port 3000.  Be sure that this port is available or configure it in the server/index.js file.

  Additionally you will need to provide a github access token in order to request data from the API.  This is stored in a config.js file in the main       directory.  The format to the config.js file should look something like the one below.

  `` module.exports = {
  TOKEN: 'MyGitHubAPItoken'
  }
  ``

## Requirements


(https://nodejs.org/en/download/)

## Development



### Installing Dependencies

From within the root directory:

``
npm install -g webpack
npm install
``

