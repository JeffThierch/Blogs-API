const loginValidations = require('./validations/loginValidations');
const { generateUserToken } = require('./helpers');
const { User } = require('../models');
const { errorNames: { INVALID_FIELDS } } = require('./validations/helpers');

const loginRequest = async ({ email, password }) => {
  loginValidations.validateLoginFields({ email, password });
  
  const user = await User.findOne({ where: { email } });

  if (!user || user.password !== password) {
    throw new Error(INVALID_FIELDS);
  }

  const token = generateUserToken({ id: user.id, email: user.email });

  return token;
};

module.exports = {
  loginRequest,
};