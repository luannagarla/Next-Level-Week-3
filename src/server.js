// importar a biblioteca
const express = require('express');
//iniciando o express
const server = express()

//crir uma rota
server.get('/', (request, response) => {
    return response.send('uhuu')
})

//ligar o servidor
server.listen(5500)