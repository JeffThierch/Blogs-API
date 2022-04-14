const postValidation = require('./validations/postValidations');
const categorieServices = require('./categorieServices');
const { BlogPost, User, Categorie, PostCategorie } = require('../models');

const getAll = async () => {
  const AllPost = await BlogPost.findAll({
    include: [
      {
        model: User,
        as: 'user',
        attributes: { exclude: ['password'] },
      },
      { 
        model: Categorie,
        as: 'categories',
        through: { attributes: [] },
      },
    ],
  });

  return AllPost;
};

const create = async ({ title, content, categoryIds, userId }) => {
  postValidation.validateCreatePostFields({ title, content, categoryIds });

  await Promise.all(categoryIds.map((categoryId) => (
    categorieServices.getById({ id: categoryId })
    )));

  const newPost = await BlogPost.create({
    title, content, userId,
  });

  return newPost;
};

module.exports = {
  getAll,
  create,
};