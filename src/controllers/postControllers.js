const postServices = require('../services/postServices');

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

module.exports = {
  create,
};