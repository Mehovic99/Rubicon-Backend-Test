//Connecting to a local port in oreder to test the API using postman
const http = require('http');

//Defining the link on which the program will run
//This part can also be done by using app.listen('3000'), which would also launch the program at localhost:3000.
const hostname = 'localhost';
const port = 3000;

//A message that will appear on the page that will prove if the program launched successfully
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('The backend is operational');
});

//A message that appers in the terminal that confirms the program was started
server.listen(port, hostname, () => {
  console.log(`Server has been started. The app is running at http://${hostname}:${port}/`);
});

//Defining the required constants to connect to the datbase file
const mysql = require('mysql');
let sql;

//Connecting to the database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root123',
  database: 'task'
});


