//Conectando ao banco de dados
const mongoose = require('mongoose');

//Conexão com o MongoDB
mongoose.connect('mongodb://localhost:27017/Estacionamento', {});

//Obtém a conexão padrão do Moongose
const db = mongoose.connection;

//Listener de eventos para caso haja erros na conexão
db.on('error', console.error.bind(console, 'Erro de conexão com o MongoDB: '));

//Listener de eventos para garantir que a conexão foi estabelecida
db.once('open', function() {
    console.log('Conexão com o MongoDB estabelecida com sucesso!!');
});

//Exportação da conexão com o banco de dados
module.exports = db;
