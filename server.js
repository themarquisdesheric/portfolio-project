'use strict';

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));

//use arrow functions here

app.get('/', function(request, response) {
  response.sendFile('public/index.html', {root: '.'});
});

app.get('*', function(request, response) {
  response.status(404).send('404 error: page not found');
});

app.listen(PORT, function() {
  console.log(`Running on port ${PORT}`);
});