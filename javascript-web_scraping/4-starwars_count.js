#!/usr/bin/node

const request = require('request');

const apiUrl = process.argv[2];

const characterId = 18;

let movieCount = 0;

const url = `https://swapi-api.hbtn.io/api/films/`;


request(apiUrl, (error, response, body) => {
  if (error) {
    console.error(`Error: ${error}`);
  } else if (response.statusCode !== 200) {
    console.error('Status:', response.statusCode);
  } else {
    const films = JSON.parse(body).results;
    films.forEach(film => {
      const characters = film.characters;
      if (characters.includes(`https://swapi-api.hbtn.io/api/people/${characterId}/`)) {
        movieCount++;
      }
    });
    console.log(movieCount);
}
});
