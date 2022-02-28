const {Pool} = require('pg');

const database = new Pool({
    user: 'postgres',
    host: 'data_base',
    database:'materias',
    password: 'sebasK@48',
    port: 5432
});


//exportar la conexion a la base de datos
module.exports = database;