const express = require('express');
const categorieController = require('../controllers/categorieControllers');
const { authJwt } = require('../middlewares/authJWT');

const router = express.Router();

router
  .post('/', authJwt, categorieController.create);

module.exports = router;