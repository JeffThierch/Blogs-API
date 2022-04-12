const userServices = require('../services/userServices');

const create = async (req, res, next) => {
  try {
    const { displayName, email, password, image } = req.body;

    const token = await userServices.create({ displayName, email, password, image });

    return res.status(201).json({ token });
  } catch (error) {
    console.error(error.message);
    
    return next(error.message);
  }
};

module.exports = {
  create,
};