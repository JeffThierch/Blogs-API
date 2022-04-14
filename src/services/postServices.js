const postValidation = require('./validations/postValidations');
const categorieServices = require('./categorieServices');
const { BlogPost } = require('../models');

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
  create,
};