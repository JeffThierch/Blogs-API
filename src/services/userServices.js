const jwt = require('jsonwebtoken');
const userValidations = require('./validations/userValidations');
const { User } = require('../models');
const { errorNames: { USER_ALREADY_EXIST } } = require('./validations/helpers');

const jwtSecret = process.env.JWT_SECRET;

const create = async ({ displayName, email, password, image }) => {
  userValidations.validateCreateUserFields({ displayName, email, password });

  const userExist = await User.findOne({ where: { email } });

  if (userExist) {
    throw new Error(USER_ALREADY_EXIST);
  }

  const { id, email: userEmail } = await User.create({ displayName, email, password, image });

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
