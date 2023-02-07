//importando a biblioteca mongoose e guardando a uma const
const mongoose = require('mongoose');

//fazendo a conexao com BD,e passando mais 2 parametros, para que no segundo se houver erro,retorne o erro no console.
//caso a conexao com BD seja feito com sucesso retorne DB estável
mongoose.connect(
    'mongodb+srv://VictorSettin:zkyqwGQXxjcMFoTD@loginsystemapi.xejs9sk.mongodb.net/LoginSystemAPI?retryWrites=true&w=majority',
    {},
    (error) => {
        if (error) {
            console.log('falha ao autenticar com mongoDB');
            console.log(error);
            return;
        }
        console.log('conexao com mongo db estável');
    }
);

// Promise Nativa
mongoose.Promise = global.Promise;
module.exports = mongoose;
