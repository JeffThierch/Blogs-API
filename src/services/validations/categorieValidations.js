const { 
  validateIfFieldExist, 
  validateIfFieldAreNotEmpty, 
  errorNames, 
} = require('./helpers');

const {
  UNDEFINED_NAME,
} = errorNames;

const validateCreateCategorieFields = ({ name }) => {
  switch (true) {
    case !validateIfFieldExist(name):
      throw new Error(UNDEFINED_NAME);
    case !validateIfFieldAreNotEmpty(name):
      throw new Error(UNDEFINED_NAME);
    default:
      return true;
  }
};

module.exports = {
  validateCreateCategorieFields,
};