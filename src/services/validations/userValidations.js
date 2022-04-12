const { validateIfFieldExist, validateFieldMinLength } = require('./helpers');

const validateIfCreateUserFieldExist = ({ displayName, email, password }) => {
  switch (true) {
    case !validateIfFieldExist(displayName):
      throw new Error('UNDEFINED_DISPLAY_NAME');
    case !validateIfFieldExist(email):
      throw new Error('UNDEFINED_EMAIL');
    case !validateIfFieldExist(password):
      throw new Error('UNDEFINED_PASSWORD');
    default:
      return true;
  }
};

const validateCreateUserFieldsLenght = ({ displayName, password }) => {
  switch (true) {
    case !validateFieldMinLength(displayName, 8):
      throw new Error('SHORT_DISPLAY_NAME');
    case !validateFieldMinLength(password, 6):
      throw new Error('SHORT_PASSWORD');
    default:
      return true;
  }
};

const validadateUserEmail = (email) => {
  const emailRegex = /^[\w]+([.|\-|_][A-Za-z0-9]+)*@[a-z]{2,}(\.[a-z]{2,})+$/g;

  const isEmailValid = emailRegex.test(email);

  if (!isEmailValid) {
    throw new Error('INVALID_EMAIL');
  }

  return true;
};

const validateCreateUserFields = ({ displayName, email, password }) => {
  validateIfCreateUserFieldExist({ displayName, email, password });

  validateCreateUserFieldsLenght({ displayName, password });

  validadateUserEmail(email);
};

module.exports = {
  validateCreateUserFields,
};