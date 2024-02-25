const { Sequelize } = require('sequelize')
const express = require('express')
const cors = require('cors')

const app = new express()
app.use(cors())
app.use(express.json())

//use npm run dev

const sequelize = new Sequelize({ // define o login no db
    dialect: 'mysql',
    host: '35.193.251.32',
    username: 'myuser',
    password: '123456',
    database: 'dw-docpro',
});

sequelize.authenticate().then(function(){ // faz a verificação do login no db
    console.log("Conectado ao Banco de Dados")
}).catch(function(erro){
    console.log(erro)
})

app.get('/dados', (req, res) => {
  sequelize.query('SELECT * FROM Clientes', { type: Sequelize.QueryTypes.SELECT }) // recebe os dados do db
  .then(result => {
    res.json(result)
  })
});

app.delete('/dados/:id', (req, res) => {
  const id = req.params.id;
  sequelize.query(`DELETE FROM Clientes WHERE id = ${id}`, { type: Sequelize.QueryTypes.DELETE }) // recebe o id a partir do reacjs e deleta no db de acordo com o id
});

app.listen(3030, () => {
    console.log("Local Server Iniciado")
})