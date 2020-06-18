const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ message: 'Hello World' }));
});

server.listen(port + Number(process.env.INSTANCE_ID || 0), hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});