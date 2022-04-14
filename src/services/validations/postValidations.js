const { 
  validateIfFieldExist, 
  errorNames, 
} = require('./helpers');

const {
  UNDEFINED_TITLE,
  UNDEFINED_CONTENT,
  UNDEFINED_CATEGORY_ID,
  CATEGORY_CANT_BE_EDITED,
} = errorNames;

const validateIfCreatePostFieldsExist = ({ title, content, categoryIds }) => {
  switch (true) {
    case !validateIfFieldExist(title):
      throw new Error(UNDEFINED_TITLE);
    case !validateIfFieldExist(content):
      throw new Error(UNDEFINED_CONTENT);
    case !validateIfFieldExist(categoryIds):
      throw new Error(UNDEFINED_CATEGORY_ID);
    default:
      return true;
  }
};

const validateIfEdittPostFieldsExist = ({ title, content, categoryIds }) => {
  switch (true) {
    case !validateIfFieldExist(title):
      throw new Error(UNDEFINED_TITLE);
    case !validateIfFieldExist(content):
      throw new Error(UNDEFINED_CONTENT);
    case validateIfFieldExist(categoryIds):
      throw new Error(CATEGORY_CANT_BE_EDITED);
    default:
      return true;
  }
};

const validateCreatePostFields = ({ title, content, categoryIds }) => {
  validateIfCreatePostFieldsExist({ title, content, categoryIds });
};

const validateEditPostFields = ({ title, content, categoryIds }) => {
  validateIfEdittPostFieldsExist({ title, content, categoryIds });
};

module.exports = {
  validateCreatePostFields,
  validateEditPostFields,
};