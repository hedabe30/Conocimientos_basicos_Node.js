const http = require('http');

http.createServer(function (req, res) {
    console.log('Nueva petición');
    console.log(req.url);

    res.writeHead()

    //Escribir respuesta al usuario
    res.write('Hola Mundo!!!')

    res.end();
}).listen(3000);