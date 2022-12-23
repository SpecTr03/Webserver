const http = require('http');

http.createServer((request, response) => {

    response.writeHead(200, { 'Content-Type':'text/plain' } )
    response.write('hola mundo');
    response.end();
})
.listen( 8090 );

console.log('Escuchando puerto', 8090);