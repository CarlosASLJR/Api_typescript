import * as http from 'http';
import Api from './api/api';

const models = require('./models');
const config = require('./config/env/config')();
const server = http.createServer(Api);

models.sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
  }).catch(err => {
    console.error('Unable to connect to the database:', err);
  });
models.sequelize.sync().then(()=>{
    server.listen(config.serverPort);
    server.on('listening',()=> console.log(`Servidor está rodando na porta ${config.serverPort} `));
    server.on('error',(error:NodeJS.ErrnoException)=>console.log(`Ocorreu um erro ${error} `));
});