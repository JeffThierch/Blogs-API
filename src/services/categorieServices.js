const { Categorie } = require('../models');
const categorieValidation = require('./validations/categorieValidations');
const { errorNames: { CATEGORY_DONT_EXIST } } = require('./validations/helpers');

const getAll = async () => {
  const categories = await Categorie.findAll();

  return categories;
};

const getById = async ({ id }) => {
  const categorie = await Categorie.findOne({ where: { id } });

  if (!categorie) {
    throw new Error(CATEGORY_DONT_EXIST);
  }

  return categorie;
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
  getById,
};