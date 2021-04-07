const mysql = require('mysql');

const dbConect = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'udv_bk1'
});

dbConect.connect(function (err){
    if(err){
        console.log(err);
    }else{
        console.log('Conexion a base de datos correcta')
    }
});

module.exports = dbConect;