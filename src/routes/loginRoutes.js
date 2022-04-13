const express = require('express');
const loginControllers = require('../controllers/loginControllers');

const router = express.Router();

router
  .post('/', loginControllers.loginRequest);

module.exports = router;