const express = require('express');
const postControllers = require('../controllers/postControllers');
const { authJwt } = require('../middlewares/authJWT');

const router = express.Router();

router
  .get('/', authJwt, postControllers.getAll)
  .post('/', authJwt, postControllers.create)
  .get('/search', authJwt, postControllers.search)
  .get('/:id', authJwt, postControllers.getById)
  .put('/:id', authJwt, postControllers.edit)
  .delete('/:id', authJwt, postControllers.deletePost);

module.exports = router;