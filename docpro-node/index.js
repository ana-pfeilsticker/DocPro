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


app.get('/documentos', (req, res) => {
  sequelize.query('SELECT * FROM Documentos', {type: Sequelize.QueryTypes.SELECT })   //recebe os dados do dw
  .then(result => {
    res.json(result)
  })
});



//essa função post insere novos dados na tabela de Documentos, cadastro de documentos
app.post('/documentos', (req, res) => {
  const { nome, tags } = req.body;

  sequelize.query(
    'INSERT INTO Documentos (nome, tags) VALUES (?, ?)',                          
    {
      replacements: [nome, tags],
      type: Sequelize.QueryTypes.INSERT,
    }
  )
    .then(() => {
      res.json({ success: true, message: 'Documento cadastrado com sucesso.' });
    })
    .catch((error) => {
      console.error('Erro ao cadastrar documento:', error);
      res.status(500).json({ success: false, message: 'Erro ao cadastrar documento.' });
    });
});


app.delete('/dados/:id', (req, res) => {
  const id = req.params.id;
  sequelize.query(`DELETE FROM Clientes WHERE id = ${id}`, { type: Sequelize.QueryTypes.DELETE }) // recebe o id a partir do reacjs e deleta no db de acordo com o id
});

app.delete('/documentos/:id', (req, res) => {
  const id = req.params.id;
  sequelize.query(`DELETE FROM Documentos WHERE id = ${id}`, { type: Sequelize.QueryTypes.DELETE }) // recebe o id a partir do reacjs e deleta no db de acordo com o id
});

app.put('/documentos/:id', (req, res) => {
  const id = req.params.id;
  const {
    nome,
    tags,
  } = req.body;

  // query no sql para atualizar os dados
  sequelize.query(
    'UPDATE Documentos SET ' +
    'nome = ?, ' +
    'tags = ? ' +
    'WHERE id = ?',
    {
      replacements: [
        nome,
        tags,
        id
      ],
      type: Sequelize.QueryTypes.UPDATE
    }
  ).then(result => {
    // Retorna uma resposta indicando sucesso
    res.json({ success: true, message: 'Dados atualizados com sucesso.' });
  }).catch(error => {
    // Se ocorrer um erro, retorna uma resposta indicando falha
    console.error('Erro ao atualizar dados:', error);
    res.status(500).json({ success: false, message: 'Erro ao atualizar dados.' });
  });
});

app.put('/dados/:id', (req, res) => {
  const id = req.params.id;
  const {
    nome,
    email,
    nacionalidade,
    estado_civil,
    profissao,
    nome_pai,
    nome_mae,
    cpf,
    rg,
    org_emissor,
    nit,
    ctps,
    serie_ctps,
    endereco,
    cep,
    uf,
    celular,
    data_nascimento
  } = req.body;

  // query no sql para atualizar os dados
  sequelize.query(
    'UPDATE Clientes SET ' +
    'nome = ?, ' +
    'email = ?, ' +
    'nacionalidade = ?, ' +
    'estado_civil = ?, ' +
    'profissao = ?, ' +
    'nome_pai = ?, ' +
    'nome_mae = ?, ' +
    'cpf = ?, ' +
    'rg = ?, ' +
    'org_emissor = ?, ' +
    'nit = ?, ' +
    'ctps = ?, ' +
    'serie_ctps = ?, ' +
    'endereco = ?, ' +
    'cep = ?, ' +
    'uf = ?, ' +
    'celular = ?, ' +
    'data_nascimento = ? ' +
    'WHERE id = ?',
    {
      replacements: [
        nome,
        email,
        nacionalidade,
        estado_civil,
        profissao,
        nome_pai,
        nome_mae,
        cpf,
        rg,
        org_emissor,
        nit,
        ctps,
        serie_ctps,
        endereco,
        cep,
        uf,
        celular,
        data_nascimento,
        id
      ],
      type: Sequelize.QueryTypes.UPDATE
    }
  ).then(result => {
    // Retorna uma resposta indicando sucesso
    res.json({ success: true, message: 'Dados atualizados com sucesso.' });
  }).catch(error => {
    // Se ocorrer um erro, retorna uma resposta indicando falha
    console.error('Erro ao atualizar dados:', error);
    res.status(500).json({ success: false, message: 'Erro ao atualizar dados.' });
  });
});


app.listen(3030, () => {
    console.log("Local Server Iniciado")
})