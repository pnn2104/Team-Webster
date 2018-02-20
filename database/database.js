const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'webster'
});

connection.connect((error) => {
  if (error) {
    console.log('Error connecting to mySQL', error);
  }
  console.log('Succesfully Connected to mySQL DB');
});

const users = `CREATE TABLE IF NOT EXISTS users (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(30) NOT NULL,
  password VARCHAR(30) NOT NULL,
  PRIMARY KEY (id),
  UNIQUE(username)
)`;

connection.query(users, (error) => {
  if (error) {
    console.log('There was an error creating table:', error);
  }
})

module.exports = connection;
