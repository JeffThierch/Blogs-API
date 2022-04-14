const express = require('express');
const categoryController = require('../controllers/categoryControllers');
const { authJwt } = require('../middlewares/authJWT');

const router = express.Router();

router
  .get('/', authJwt, categoryController.getAll)
  .post('/', authJwt, categoryController.create);

module.exports = router;