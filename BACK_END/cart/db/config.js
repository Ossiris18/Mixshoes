import mysql from 'mysql2';

const connection = mysql.createConnection({
  host: 'localhost',    
  user: 'root',    
  password: '',
  database: 'mixshoes', 
  port: 3306            
});

export default connection;

