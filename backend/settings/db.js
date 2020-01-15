import mysql from 'mysql';
import util from 'util';
import {db} from './environments';

const pool = mysql.createPool({
    host: db.host,
    port: db.port,
    user: db.user,
    password: db.pass,
    database: 'cross_country_db',
    connectionLimit: db.limit
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

pool.query = util.promisify(pool.query);

module.exports = pool;