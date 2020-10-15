// importar a biblioteca
const express = require("express");
const path = require("path");

//iniciando o express
const server = express();

//crir uma rota
server
  //pasta com arquivos estáticos
  .use(express.static("public")) 

  //configurar template engina
  .set('views', path.join(__dirname, "views"))
  .set('view engine', 'hbs')

  //criação de rota
  .get("/", (request, response) => {
    // console.log(request.query) - posso ver oq foi registrado na barra
    return response.render('index')
  });

//ligar o servidor
server.listen(5500);
