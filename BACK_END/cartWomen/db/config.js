// Importar el cliente MySQL
import mysql from 'mysql2/promise'; // Usamos 'mysql2/promise' para async/await

// Configuración de la conexión a MySQL (puedes obtener estos datos desde MySQL Workbench)
const dbConfig = {
  host: 'localhost',          // O la IP de tu servidor MySQL (127.0.0.1)
  user: 'root',         // Usuario de MySQL (por defecto 'root')
  password: 'Fernanda24',  // Contraseña de MySQL (si no hay, dejar vacío '')
  database: 'Mixshoes',       // Nombre de la base de datos
  port: 3306,                 // Puerto por defecto de MySQL
  waitForConnections: true,
  connectionLimit: 10,        // Límite de conexiones (útil para conexiones en pool)
  queueLimit: 0               // Límite de solicitudes en cola (0 = sin límite)
};

// Crear un pool de conexiones (mejor para microservicios)
const pool = mysql.createPool(dbConfig);

// Exportar la conexión para usarla en otros módulos
export default pool;