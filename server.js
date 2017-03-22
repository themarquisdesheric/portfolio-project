'use strict';

var express = require('express'),
  requestProxy = require('express-request-proxy'),
  PORT = process.env.PORT || 3000,
  app = express();

function proxyGitHub(request, response) {
  console.log('Routing Github request for', request.params[0]);
  (requestProxy({
    url: 'https://api.github.com/' + request.params[0],
    header: {
      Authorization: `token ${process.env.AUTH_TOKEN}`
    }
  }))(request, response);
}


app.use(express.static('./public'));

app.get('/', (request, response) => response.sendFile('public/index.html', {root: '.'}));

app.get('/github/*', proxyGitHub);

app.get('*', (request, response) => response.status(404).send('404 error: page not found'));

app.listen(PORT, () => console.log(`Running on port ${PORT}`));