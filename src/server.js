// instanciando uma const para a porta
const port = 3001;

// importando express
const express = require('express');
// importando AuthController
const AuthController = require('./controller/AuthController');

// atribuindo a funcao express para const app
const app = express();

// fazendo que  a const app leia arquivos em formato json
app.use(express.json());

// pradronizando as rotas sempre iniciando com /auth/....
app.use('/auth', AuthController);

//definindo o local para rodar o servidor
app.listen(port, () => {
    console.log('server running at ' + port);
});
