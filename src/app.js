//Connecting to a local port in oreder to test the API using postman
const http = require('http');

//Defining the link on which the program will run
const hostname = '127.0.0.1';
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
const sqlite = require("sqlite3").verbose();
const axios = require("axios");
let sql;

//Connecting to the database
const db = new sqlite.Database("./database/Task.db", sqlite.OPEN_READWRITE, (err) => {
  if (err) console.error(err);
});