const jwt = require('jsonwebtoken');

const jwtSecret = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '5s',
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
