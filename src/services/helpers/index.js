const jwt = require('jsonwebtoken');

const jwtSecret = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const generateUserToken = ({ id, email }) => {
  const token = jwt.sign({ data: { id, email } }, jwtSecret, jwtConfig);

  return token;
};

const validateToken = ({ token }) => {
  const tokenDecored = jwt.verify(token, jwtSecret);
  return tokenDecored;
};

module.exports = {
  generateUserToken,
  validateToken,
};
