const express = require('express');

const app = express();

app.use(express.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

const routes = require('../routes');

app.use(routes);

const errorController = require('../controllers/errorController');

app.use(errorController);

module.exports = app;