//importando a biblioteca express
const express = require('express');

//importando minha tabela feita com mongodb
const UserModel = require('../models/User');

//criando uma constante , que ira chamar a funcao Router vai fazer as requisiçoes
const router = express.Router();

// chamando a funcao Router e passando a rota Register
router.post('/register', async (req, res) => {
    //  atribuo uma const email,que é o mesmo email que o usuario esta tentando registrar
    //  e faço uma busca dentro da UserModel, e torna uma msg se o email ja existir
    const { email } = req.body;
    if (await UserModel.findOne({ email })) {
        return res.status(400).json({
            error: true,
            message: 'Email ja existe',
        });
    }

    //aguardo o cliente ser criado, apos criado enviar as informaçoes dele
    const User = await UserModel.create(req.body);

    //retornando o body para o front sem a senha do usuario

    return res.json({
        error: false,
        message: 'registrado com sucesso',
        data: User,
    });
});

module.exports = router;
