#!/usr/bin/node

const fs = require('fs');

// Extracting command line arguments
const [, , filePath, content] = process.argv;

// Writing content to file
fs.writeFile(filePath, content, 'utf8', (err) => {
  if (err) {
    console.error(err);
  }
});
