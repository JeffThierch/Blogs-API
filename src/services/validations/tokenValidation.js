const { 
  validateIfFieldExist, 
  errorNames, 
} = require('./helpers');

const {
  UNDEFINED_TOKEN,
} = errorNames;

const validateJwtToken = ({ token }) => {
  switch (true) {
    case !validateIfFieldExist(token):
      throw new Error(UNDEFINED_TOKEN);
    default:
      return true;
  }
};

module.exports = {
  validateJwtToken,
};