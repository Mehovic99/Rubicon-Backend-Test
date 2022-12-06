//Importing necessary componenets
import express from 'express';
import mysql from 'mysql';

//Connecting to a local port in oreder to test the API using postman
const { appendFile } = require('fs');
const http = require('http');
const app = express();

//Body parsing necessary for processing http into json throguh express
app.use(express.json());

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

//Creating parameters for the connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', //Change the value if needed in order to match your credentials for the user
  password: 'root123', //Change the value if needed in order to match your credentials for the password that user has setup
  database: 'task' //If the database doesn't exist, there is a file called 'Task.sql' that you can run as a query on PhpMyAdmin in order to have the database and its data
});

//Connecting to the database
db.connect((err) => {
  if(err){
    throw err;
  }
  console.log('Database connection successful');
});

//API SECTION

//Get all blog posts
app.get('/api/posts', (req, res)=>{
  let sql = 'SELECT * FROM posts';
  db.query(sql, (err, results)=>{
    if(err){
      return res.status(500).json(err);
    }
    res.status(200).json(results);
  });
});