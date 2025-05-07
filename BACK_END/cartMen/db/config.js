import Database from 'better-sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

// 1. Obtener el directorio actual del módulo
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// 2. Definir ruta absoluta a la base de datos
const dbFolder = path.join(__dirname, './database'); // Sube un nivel desde db/
const dbPath = path.join(dbFolder, 'mixshoes.db');

// 4. Configuración de la conexión con manejo de errores
let db;
try {
  db = new Database(dbPath, {
    verbose: console.log, // Opcional: muestra logs de SQL
    fileMustExist: false // Crea el archivo si no existe
  });
  
  // 5. Configuraciones adicionales recomendadas
  db.pragma('journal_mode = WAL'); // Mejor rendimiento para escrituras
  db.pragma('foreign_keys = ON'); // Habilita claves foráneas
  
  console.log(`Conexión exitosa a SQLite en: ${dbPath}`);
} catch (err) {
  console.error('Error al conectar a SQLite:', err);
  process.exit(1); // Termina la aplicación si no puede conectarse
}

export default db;