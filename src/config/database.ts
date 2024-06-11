import mysql, { Connection, ConnectionConfig } from 'mysql';

interface DatabaseConnection {
  (): Connection;
}

const conectarBancoDeDados: DatabaseConnection = () => {
  const config: ConnectionConfig = {
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'portal_noticias',
  };

  const connection = mysql.createConnection(config);

  connection.connect((err) => {
    if (err) {
      console.error('Error connecting to the database:', err);
      return;
    }
    console.log('Connected to the database');
  });

  return connection;
};

export default conectarBancoDeDados;
