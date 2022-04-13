const userServices = require('../services/userServices');

const getAll = async (_req, res, next) => {
  try {
    const allUsers = await userServices.getAll();

    return res.status(200).json(allUsers);
  } catch (error) {
    console.error(error.message);
    
    return next(error.message);
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    
    const userById = await userServices.getById({ id });

    return res.status(200).json(userById);
  } catch (error) {
    console.error(error.message);
    
    return next(error.message);
  }
};

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
  getAll,
  getById,
};