const userServices = require('../services/userServices');

const create = async (req, res, next) => {
  try {
    const { displayName, email, password, image } = req.body;

    const token = userServices.create({ displayName, email, password, image });

    return res.status(201).json({ token });
  } catch (error) {
    console.error(error);
    
    return next(error.message);
  }
};

module.exports = {
  create,
};