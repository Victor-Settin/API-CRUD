// importando a concexao com o BD
const mongoose = require('../database/index');

//importando bcryptjs para criptografia
const bcryptjs = require('bcryptjs');

// apos a concexao com sucesso no BD, ira criar uma tabela com 4 colunas
const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true,
        unique: true,
        lowecase: true,
    },
    password: {
        type: String,
        require: true,
        select: false,
    },
    createdAT: {
        type: Date,
        default: Date.now,
    },
});

// criptgrafando a senha antes que seja "save" ou "criado"
UserSchema.pre('save', async function (next) {
    const hash = await bcryptjs.hash(this.password, 10);
    console.log(this);
    console.log(hash);
    this.password = hash;
});

// atribuindo o nome da tabela para "User" recebendo o schema "UserSchema"
const User = mongoose.model('User', UserSchema);

// exportando a tabela
module.exports = User;
