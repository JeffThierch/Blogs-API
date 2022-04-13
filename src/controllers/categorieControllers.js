const categorieServices = require('../services/categorieServices');

const getAll = async (_req, res, next) => {
  try {
    const categories = await categorieServices.getAll();
  
    return res.status(200).json(categories);
  } catch (error) {
    console.error(error.message);

    return next(error.message);
  }
};

const create = async (req, res, next) => {
  try {
    const { name } = req.body;

    const newCategory = await categorieServices.create({ name });
  
    return res.status(201).json(newCategory);
  } catch (error) {
    console.error(error.message);

    return next(error.message);
  }
};

module.exports = {
  create,
  getAll,
};