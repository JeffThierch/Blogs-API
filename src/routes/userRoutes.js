const express = require('express');
const userController = require('../controllers/userControllers');
const { authJwt } = require('../middlewares/authJWT');

const router = express.Router();

router
  .get('/', authJwt, userController.getAll)
  .post('/', userController.create)
  .delete('/me', authJwt, userController.deleteUser)
  .get('/:id', authJwt, userController.getById);

module.exports = router;