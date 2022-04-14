const express = require('express');

const router = express.Router();

const userRoutes = require('./userRoutes');
const loginRoutes = require('./loginRoutes');
const categoryRoutes = require('./categoryRoutes');
const postRoutes = require('./postRoutes');

router.use('/user', userRoutes);

router.use('/login', loginRoutes);

router.use('/categories', categoryRoutes);

router.use('/post', postRoutes);

module.exports = router;