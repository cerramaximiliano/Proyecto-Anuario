const express = require('express');
const server = express();
const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server on PORT ${PORT}`);

});


// const http = require('http');
// const fs = require('fs');

// http.createServer( function (req,res) {
    // res.writeHead(200, {'Content-Type': 'text/plain'})
    // res.end('Hola Mundo');

    // res.writeHead(200, {'Content-Type': 'text/html'});
    // let html = fs.readFileSync(__dirname + '/index.html' );
    // html = html.replace('{cohorte}', 'FT41b')
    // res.end(html);

    // res.writeHead(200, {'Content-Type': 'application/json'})
    // let cohorte = {
    //     numero: 41,
    //     cedula: 'b'
    // }
    // res.end( JSON.stringify(cohorte) )

//     res.setHeader('Access-Control-Allow-Origin', '*');

//     const alumnos = fs.readFileSync(__dirname + '/alumnos.json');
//     if( req.url === '/alumnos'){
//         res.writeHead(200, {'Content-Type': 'application/json'} )
//         res.end(alumnos)
//     }else if(req.url.startsWith('/detalle/') ) {
//         const params = req.url.split('/');
//         const id = params[2];
//         res.writeHead(200, {'Content-Type': 'application/json'} )
//         const alumno = JSON.parse(alumnos)[id];
//         res.end(JSON.stringify(alumno));
   
//     }

// }).listen(3001, 'localhost');