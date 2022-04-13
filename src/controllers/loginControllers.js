const loginServices = require('../services/loginServices');

const loginRequest = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const token = await loginServices.loginRequest({ email, password });

    res.status(200).json({ token });
  } catch (error) {
    return next(error.message);
  }
};

module.exports = {
  loginRequest,
};