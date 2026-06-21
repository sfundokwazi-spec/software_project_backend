import mysql from 'mysql2/promise';
/*
const pool = mysql.createPool({
    host: process.env.MYSQLHOST || 'roundhouse.proxy.rlwy.net',
    port: process.env.MYSQLPORT || '12431',
    user: process.env.MYSQLUSER || 'root',
    password: process.env.MYSQLPASSWORD || 'QrJhacQgGKeQfaQJxUhBoKmWzLfwxCym',
    database: process.env.MYSQLDATABASE || 'navigation_db'
});*/

const pool = mysql.createPool({
    host: process.env.MYSQLHOST || '10.2.47.177',
    port: process.env.MYSQLPORT || '3306',
    user: process.env.MYSQLUSER || 'app',
    password: process.env.MYSQLPASSWORD || '12345',
    database: process.env.MYSQLDATABASE || 'navigation_db'
});

pool.query('SELECT 1')
    .then(() => console.log('Database connected successfully'))
    .catch(err => console.error('Database connection failed:', err.message));

export default pool;