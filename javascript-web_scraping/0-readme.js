#!/usr/bin/node

const fs = require('fs');

function readFile (filePath) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('An error occurred:', err);
      return;
    }
    console.log(data);
  });
}

if (process.argv.length !== 3) {
  console.log('Usage: ./read_file.js <file_path>');
} else {
  const filePath = process.argv[2];
  readFile(filePath);
}
