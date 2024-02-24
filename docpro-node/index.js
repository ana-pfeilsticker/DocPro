const { Sequelize } = require('sequelize')
const sequelize = new Sequelize({
    dialect: 'mysql',
    host: '35.193.251.32',
    username: 'myuser',
    password: '123456',
    database: 'dw-docpro',
  });

sequelize.authenticate().then(function(){
    console.log("Conectado ao Banco de Dados")
}).catch(function(erro){
    console.log(erro)
})
const express = require('express')

const app = new express()

app.get('/', (req,res) => {
    sequelize.query('SELECT * FROM Clientes', { type: Sequelize.QueryTypes.SELECT })
  .then(results => {
    res.json(results);
  })
  .catch(error => {
    res.status(500).send('Erro na consulta:', error);
  });
})

app.listen(3030, () => {
    console.log("Local Server Iniciado")
})