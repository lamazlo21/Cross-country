const mysql = require('mysql');
const {dbHost, dbPass, dbPort, dbUser, dbLimit} = require('./environments');

mysql.createPool({
    host: dbHost,
    port: dbPort,
    user: dbUser,
    password: dbPass,
    database: 'cross_country_db',
    connectionLimit: dbLimit,
})

pool.getConnection((err, connection)=>{
    if(err){
        if(err.code === 'PROTOCOL_CONNECTION_LOST')
            console.error('Database connection was closed.');
        if(err.code === 'ER_CON_COUNT_ERROR')
            console.error('Database has to many connections.');
        if(err.code === 'ECONNREFUSED')
            console.error('Database connection was refused.');
    }else if(connection)
        connection.release();
    return;
})

module.exports = pool;