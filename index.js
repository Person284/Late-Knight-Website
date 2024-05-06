const mysql = require('mysql2');
const express = require('express');
const bodyParser = require('body-parser');

// create a new MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'plu2024',
  database: 'test schema'
});

// connect to the MySQL database
connection.connect((error) => {
  if (error) {
    console.error('Error connecting to MySQL database:', error);
    return;
  }
  
  console.log('Connected to MySQL database!');
  
  // Run a query
  connection.query('Select * FROM episodes WHERE tags LIKE "%kaden%";', (err, results, fields) => {
    if (err) {
      console.error('Error executing query:', err);
      return;
    }
    
    // Log the results
    console.log('Query results:', results);
    
    // Close the connection
    connection.end();
  });
});