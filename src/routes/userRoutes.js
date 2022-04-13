const express = require('express');
const userController = require('../controllers/userControllers');
const { authJwt } = require('../middlewares/authJWT');

const router = express.Router();

router
  .get('/', authJwt, userController.getAll)
  .post('/', userController.create);

module.exports = router;