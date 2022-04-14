const postServices = require('../services/postServices');

const getAll = async (req, res, next) => {
  try {
    const allPosts = await postServices.getAll();

    return res.status(200).json(allPosts);
  } catch (error) {
    console.error(error.message);

    return next(error.message);
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const post = await postServices.getById({ id });

    return res.status(200).json(post);
  } catch (error) {
    console.error(error.message);
    
    return next(error.message);
  }
};

const create = async (req, res, next) => {
  try {
    const { title, content, categoryIds } = req.body;
    const { id } = req.user;

    const newPost = await postServices.create({ title, content, categoryIds, userId: id });

    return res.status(201).json(newPost);
  } catch (error) {
    console.error(error.message);

    return next(error.message);
  }
};

const edit = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, content, categoryIds } = req.body;
    const { id: userId } = req.user;

    const newPost = await postServices.edit({ id, title, content, categoryIds, userId });

    return res.status(200).json(newPost);
  } catch (error) {
    console.error(error.message);

    return next(error.message);
  }
};

module.exports = {
  getAll,
  create,
  getById,
  edit,
};