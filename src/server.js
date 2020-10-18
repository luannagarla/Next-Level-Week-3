// importar a biblioteca
const express = require("express");
const path = require("path");
const pages = require("./pages.js");

//iniciando o express
const server = express();

//crir uma rota
server
  // utilizar body de req
  .use(express.urlencoded({ extended: true }))

  //pasta com arquivos estáticos
  .use(express.static("public"))

  //configurar template engina
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "hbs")

  //criação de rota
  .get("/", pages.index)
  .get("/orphanage", pages.orphanage)
  .get("/orphanages", pages.orphanages)
  .get("/create-orphanage", pages.createOrphanage)
  .get("/save-orphanage", pages.saveOrphanage)

// console.log(request.query) - posso ver oq foi registrado na barra

//ligar o servidor
server.listen(5500);
