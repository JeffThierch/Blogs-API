const userValidations = require('./validations/userValidations');
const { User } = require('../models');
const { generateUserToken } = require('./helpers');
const { errorNames: { USER_ALREADY_EXIST, USER_NOT_EXIST } } = require('./validations/helpers');

const getAll = async () => {
  const allUsers = await User.findAll({
    attributes: { exclude: ['password'] },
  });

  return allUsers;
};

const getById = async ({ id }) => {
  const user = await User.findOne({ where: { id }, attributes: { exclude: ['password'] } });

  if (!user) {
    throw new Error(USER_NOT_EXIST);
  }

  return user;
};

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

const deleteUser = async ({ id }) => {
  await User.destroy({ where: { id } });
};

module.exports = {
  create,
  getAll,
  getById,
  deleteUser,
};
