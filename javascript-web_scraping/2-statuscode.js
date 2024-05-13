#!/usr/bin/node

const request = require('request');

// Function to make a GET request and display the status code
function getStatus (url) {
  // Making a GET request
  request.get(url, function (error, response) {
    if (error) {
      console.error('Error occurred:', error);
    } else {
      // Displaying the status code
      console.log('code:', response.statusCode);
    }
  });
}

// Taking the URL from command line argument
const url = process.argv[2];

// Checking if URL is provided
if (url) {
  // Calling the function to get the status code
  getStatus(url);
} else {
  console.error('Please provide a URL as an argument.');
}
