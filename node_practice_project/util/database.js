const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user:'root',
    database:'new_db',
    password:'Cel@1234'
});

module.exports = pool.promise();