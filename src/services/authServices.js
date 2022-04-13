const tokenValidation = require('./validations/tokenValidation');
const { validateToken } = require('./helpers');

const validateJwt = ({ token }) => {
  tokenValidation.validateJwtToken({ token });

  validateToken({ token });
};

module.exports = {
  validateJwt,
};