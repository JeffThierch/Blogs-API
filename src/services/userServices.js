const jwt = require('jsonwebtoken');
const userValidations = require('./validations/userValidations');
const { User } = require('../models');

const jwtSecret = process.env.JWT_SECRET;

const create = ({ displayName, email, password, image }) => {
  userValidations.validateCreateUserFields({ displayName, email, password });

  const userExist = User.findOne({ where: { email } });

  if (userExist) {
    throw new Error('USER_ALREADY_EXIST');
  }

  const { id, email: userEmail } = User.create({ displayName, email, password, image });

  const jwtConfig = {
    expiresIn: '1d',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ data: { id, email: userEmail } }, jwtSecret, jwtConfig);

  return token;
};

module.exports = {
  create,
};
