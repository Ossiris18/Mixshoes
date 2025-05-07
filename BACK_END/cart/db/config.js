import mysql from 'mysql2';

const connection = mysql.createConnection({
  host: '127.0.0.1',    
  user: 'root',    
  password: '',
  database: 'mixshoes', 
  port: 3306            
});

export default connection;

