const express = require('express');
const app = express();

//config 
app.set('port', process.env.PORT || 8080);
//gestion o middleware
app.use(express.json());

//rutas
app.use(require('./routes/creditos'))

//configuracion del server
app.listen(app.get('port'), () => {
console.log('Escuchando en el puerto '+app.get('port') +' correctamente')
});
