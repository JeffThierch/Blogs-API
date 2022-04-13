const categorieServices = require('../services/categorieServices');

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
};