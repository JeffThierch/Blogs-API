const postValidation = require('./validations/postValidations');
const categorieServices = require('./categorieServices');
const { BlogPost, User, Categorie } = require('../models');
const { errorNames: { POST_NOT_EXIST, UNAUTHORIZED_USER } } = require('./validations/helpers');

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

const getById = async ({ id }) => {
  const post = await BlogPost.findOne({
    where: { id },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Categorie, as: 'categories', through: { attributes: [] } },
    ],
  });

  if (!post) {
    throw new Error(POST_NOT_EXIST);
  }

  return post;
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

const edit = async ({ id, title, content, categoryIds, userId }) => {
  const post = await BlogPost.findOne({ 
    where: { id }, 
    include: [
      { model: User, as: 'user' },
      { model: Categorie, as: 'categories', through: { attributes: [] } },
    ],
  });

  if (post.user.id !== userId) throw new Error(UNAUTHORIZED_USER);

  if (!post) throw new Error(POST_NOT_EXIST);

  postValidation.validateEditPostFields({ title, content, categoryIds });

  await BlogPost.update({ title, content }, { where: { id } });

  return {
    title,
    content,
    userId,
    categories: post.categories,
  };
};

const deletePost = async ({ id, userId }) => {
  const post = await BlogPost.findOne({ 
    where: { id }, 
    include: [{ model: User, as: 'user' }],
  });
  
  if (!post) throw new Error(POST_NOT_EXIST);

  if (post.user.id !== userId) throw new Error(UNAUTHORIZED_USER);

  await BlogPost.destroy({ where: { id } });
};

module.exports = {
  getAll,
  create,
  getById,
  edit,
  deletePost,
};