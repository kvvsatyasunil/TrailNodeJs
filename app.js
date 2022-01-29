const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('welcome to home page');
  } else if (req.url === '/about') {
    res.end(' this about page');
  } else {
    res.end(`
  <h1>Opps..</h1>
  <a href="/">back home</a>
  `);
  }
});
server.listen(5000);
