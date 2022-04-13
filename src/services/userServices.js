const userValidations = require('./validations/userValidations');
const { User } = require('../models');
const { generateUserToken } = require('./helpers');
const { errorNames: { USER_ALREADY_EXIST } } = require('./validations/helpers');

const create = async ({ displayName, email, password, image }) => {
  userValidations.validateCreateUserFields({ displayName, email, password });

  const userExist = await User.findOne({ where: { email } });

  if (userExist) {
    throw new Error(USER_ALREADY_EXIST);
  }

  const { id, email: userEmail } = await User.create({ displayName, email, password, image });

  const token = generateUserToken({ id, email: userEmail });

  return token;
};

module.exports = {
  create,
};
