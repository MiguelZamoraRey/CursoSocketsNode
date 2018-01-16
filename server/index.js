var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

//esto sirve para decirle a express que 
//  carge los html de la carpeta por parametro
app.use(express.static('client'));

//utilizamos express para crear las rutas
app.get('/hola-mundo', (req,res)=>{
    res.status(200).send('hi world');
});

//cuando alguien se conecte:
io.on('connection', (socket)=>{
    console.log('Someone has connected from IP :'+socket.handshake.address)
})

//conexion del srver
server.listen(6677,()=>{
    console.log('Servidor esta funcionando en localhost:6677');
});

