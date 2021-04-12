const mysql = require('mysql');

const dbConect = mysql.createConnection({
    host:'35.238.180.64',
    user:'root',
    password:'#Guatemala1234#',
    database:'tn_bd1',
    multipleStatements:true
});



dbConect.connect(function (err){
    if(err){
        console.log(err);
    }else{
        console.log('Conexion a base de datos correcta')
    }
});

module.exports = dbConect;