const { 
  validateIfFieldExist, 
  validateFieldMinLength, 
  validateFieldLength, 
  errorNames, 
} = require('./helpers');

const {
  UNDEFINED_DISPLAY_NAME,
  UNDEFINED_EMAIL,
  INVALID_EMAIL,
  SHORT_DISPLAY_NAME,
  UNDEFINED_PASSWORD,
  WRONG_PASSWORD_LENGTH,
} = errorNames;

const validateIfCreateUserFieldExist = ({ displayName, email, password }) => {
  switch (true) {
    case !validateIfFieldExist(displayName):
      throw new Error(UNDEFINED_DISPLAY_NAME);
    case !validateIfFieldExist(email):
      throw new Error(UNDEFINED_EMAIL);
    case !validateIfFieldExist(password):
      throw new Error(UNDEFINED_PASSWORD);
    default:
      return true;
  }
};

const validateCreateUserFieldsLenght = ({ displayName, password }) => {
  switch (true) {
    case !validateFieldMinLength(displayName, 8):
      throw new Error(SHORT_DISPLAY_NAME);
    case !validateFieldLength(password, 6):
      throw new Error(WRONG_PASSWORD_LENGTH);
    default:
      return true;
  }
};

const validadateUserEmail = (email) => {
  const emailRegex = /^[\w]+([.|\-|_][A-Za-z0-9]+)*@[a-z]{2,}(\.[a-z]{2,})+$/g;

  const isEmailValid = emailRegex.test(email);

  if (!isEmailValid) {
    throw new Error(INVALID_EMAIL);
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