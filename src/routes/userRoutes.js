const express = require('express');
const userController = require('../controllers/userControllers');

const router = express.Router();

router
  .get('/', userController.getAll)
  .post('/', userController.create);

module.exports = router;