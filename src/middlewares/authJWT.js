const authServices = require('../services/authServices');

const authJwt = (req, _res, next) => {
  try {
    const token = req.headers.authorization;

    authServices.validateJwt({ token });

    next();
  } catch (error) {
    console.error(error.message);

    return next(error.message);
  }
};

module.exports = {
  authJwt,
};