const { Category } = require('../models');
const categoryValidation = require('./validations/categoryValidations');
const { errorNames: { CATEGORY_DONT_EXIST } } = require('./validations/helpers');

const getAll = async () => {
  const categories = await Category.findAll();

  return categories;
};

const getById = async ({ id }) => {
  const category = await Category.findOne({ where: { id } });

  if (!category) {
    throw new Error(CATEGORY_DONT_EXIST);
  }

  return category;
};

const create = async ({ name }) => {
  categoryValidation.validateCreateCategoryFields({ name });

  const newCategory = await Category.create({
    name,
  });

  return newCategory;
};

module.exports = {
  create,
  getAll,
  getById,
};