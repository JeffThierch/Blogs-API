const express = require('express');

const app = express();

app.use(express.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

const userRoutes = require('./src/routes/userRoutes');

app.use('/user', userRoutes);

const loginRoutes = require('./src/routes/loginRoutes');

app.use('/login', loginRoutes);

const categorieRoutes = require('./src/routes/categorieRoutes');

app.use('/categories', categorieRoutes);

const postRoutes = require('./src/routes/postRoutes');

app.use('/post', postRoutes);

const errorController = require('./src/controllers/errorController');

app.use(errorController);