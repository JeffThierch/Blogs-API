const tokenValidation = require('./validations/tokenValidation');
const { validateToken } = require('./helpers');

const validateJwt = ({ token }) => {
  tokenValidation.validateJwtToken({ token });

  const { data } = validateToken({ token });

  return data;
};

module.exports = {
  validateJwt,
};