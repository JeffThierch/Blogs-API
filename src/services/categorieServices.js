const { Categorie } = require('../models');
const categorieValidation = require('./validations/categorieValidations');

const getAll = async () => {
  const categories = await Categorie.findAll();

  return categories;
};

const create = async ({ name }) => {
  categorieValidation.validateCreateCategorieFields({ name });

  const newCategory = await Categorie.create({
    name,
  });

  return newCategory;
};

module.exports = {
  create,
  getAll,
};