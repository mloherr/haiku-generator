const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');

require('dotenv').config();

const server = express();

server.use(cors());
server.use(express.json());

async function getDBConnection() {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'haikus_db',
  });
  connection.connect();
  return connection;
}

const port = process.env.PORT || 4002;
server.listen(port, () => {
  console.log('Server is running on port ' + port);
});

server.get('/verseone', async (req, res) => {
  const connection = await getDBConnection();

  const querySQL = 'SELECT * FROM firstparragraph';
  const [result] = await connection.query(querySQL);
  connection.end();

  res.json({
    info: { count: result.length },
    results: result,
  });
});

server.get('/versetwo', async (req, res) => {
  const connection = await getDBConnection();

  const querySQL = 'SELECT * FROM secondparragraph';
  const [result] = await connection.query(querySQL);
  connection.end();

  res.json({
    info: { count: result.length },
    results: result,
  });
});

server.get('/versethree', async (req, res) => {
  const connection = await getDBConnection();

  const querySQL = 'SELECT * FROM thirdparragraph';
  const [result] = await connection.query(querySQL);
  connection.end();

  res.json({
    info: { count: result.length },
    results: result,
  });
});
