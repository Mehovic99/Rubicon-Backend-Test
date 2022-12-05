//Connecting to a local port in oreder to test the API using postman
const http = require('http');

//Defining the link on which the program will run
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('The backend is operational');
});

server.listen(port, hostname, () => {
  console.log(`Server has been started. The app is running at http://${hostname}:${port}/`);
});