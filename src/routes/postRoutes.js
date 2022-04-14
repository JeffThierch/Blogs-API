const express = require('express');
const postControllers = require('../controllers/postControllers');
const { authJwt } = require('../middlewares/authJWT');

const router = express.Router();

router
  .post('/', authJwt, postControllers.create);

module.exports = router;