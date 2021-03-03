import mysql from 'promise-mysql';

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'rest_api',
    connectionLimit: 10
});

pool.getConnection()
    .then(connection => {
      pool.releaseConnection(connection);
        console.log('DB is connected');
    });

export default pool;