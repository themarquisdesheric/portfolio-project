'use strict';

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));

app.get('/', function(request, response) {
  response.sendFile('public/index.html', {root: '.'});
});

app.get('*', function(request, response) {
  response.status(404).end('404 error: page not found');
});

app.listen(PORT, function() {
  console.log(`Running on port ${PORT}`);
});