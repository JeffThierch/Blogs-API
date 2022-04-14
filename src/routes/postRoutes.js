const express = require('express');
const postControllers = require('../controllers/postControllers');
const { authJwt } = require('../middlewares/authJWT');

const router = express.Router();

router
  .get('/', authJwt, postControllers.getAll)
  .post('/', authJwt, postControllers.create)
  .get('/:id', authJwt, postControllers.getById)
  .put('/:id', authJwt, postControllers.edit);

module.exports = router;