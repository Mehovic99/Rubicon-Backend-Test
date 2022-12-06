const bodyParser = require('body-parser');
const express = require('express');
const mysql = require('mysql');
const {response} = require('express');

const app = express();

const PORT = process.nextTick.PORT || 3000;
app.use(bodyParser.urlencoded({extended : false}));

app.use(bodyParser.json());

//Listening on port
app.listen(PORT, () => console.log(`Server running on ${PORT}`)); 

//MySQL connection
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root123',
  database: 'task'
})

//GET api/posts
app.get('/api/posts', (req, res) => {
  db.getConnection((err, conn) => {
    if(err) throw err
    console.log(`connected as id ${conn.threadId}`)

    conn.query('SELECT * FROM posts', (err, rows) => {
      conn.release() //returning connection back to the pool

      if(!err){
        res.send(rows);
      }
      else{
        console.log(err);
      }
    });
  });
});

// GET api/posts/:slug
app.get('/api/posts/:slug', (req, res) => {
  db.getConnection( (err, conn) => {
       if(err) throw err
       console.log(`connected as id ${conn.threadId}`)

       conn.query('SELECT * FROM posts WHERE slug = ?' , [req.params.slug] , (err, rows) => {
           conn.release() // return the connection to pool

           if(!err){
               res.send(rows);
           } else{
               console.log(err);
           }
       });
  });
});

// DELETE api/posts/:slug
app.delete('/api/posts/:slug', (req, res) => {
  db.getConnection( (err, conn) => {
       if(err) throw err
       console.log(`connected as id ${conn.threadId}`)

       conn.query('DELETE  FROM posts WHERE slug = ?' , [req.params.slug] , (err, rows) => {
           conn.release() // return the connection to pool

           if(!err){
               res.send(`Post with the slug ${[req.params.slug] } has been removed.`);
           } else{
               console.log(err);
           }
       });
  });
});