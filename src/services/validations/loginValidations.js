const { 
  validateIfFieldExist, 
  validateIfFieldAreNotEmpty, 
  errorNames, 
} = require('./helpers');

const {
  UNDEFINED_EMAIL,
  UNDEFINED_PASSWORD,
  EMPTY_EMAIL,
  EMPTY_PASSWORD,
} = errorNames;

const validateIfLoginFieldsExist = ({ email, password }) => {
  switch (true) {
    case !validateIfFieldExist(email):
      throw new Error(UNDEFINED_EMAIL);
    case !validateIfFieldExist(password):
      throw new Error(UNDEFINED_PASSWORD);
    default:
      return true;
  }
};

const validateIfLoginFieldsAreNotEmpty = ({ email, password }) => {
  switch (true) {
    case !validateIfFieldAreNotEmpty(email):
      throw new Error(EMPTY_EMAIL);
    case !validateIfFieldAreNotEmpty(password):
      throw new Error(EMPTY_PASSWORD);
    default:
      return true;
  }
};

const validateLoginFields = ({ email, password }) => {
  validateIfLoginFieldsExist({ email, password });
  validateIfLoginFieldsAreNotEmpty({ email, password });
};

module.exports = {
  validateLoginFields,
};