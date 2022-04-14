const validateIfFieldExist = (field) => field !== undefined; 
const validateFieldMinLength = (field, minLength) => field.trim().length >= minLength;
const validateIfFieldAreNotEmpty = (field) => field.trim().length !== 0;
const validateFieldLength = (field, fieldLength) => field.trim().length === fieldLength;

const errorNames = {
  USER_ALREADY_EXIST: 'USER_ALREADY_EXIST',
  USER_NOT_EXIST: 'USER_NOT_EXIST',
  SHORT_DISPLAY_NAME: 'SHORT_DISPLAY_NAME',
  WRONG_PASSWORD_LENGTH: 'WRONG_PASSWORD_LENGTH',
  INVALID_EMAIL: 'INVALID_EMAIL',
  UNDEFINED_DISPLAY_NAME: 'UNDEFINED_DISPLAY_NAME',
  UNDEFINED_EMAIL: 'UNDEFINED_EMAIL',
  UNDEFINED_PASSWORD: 'UNDEFINED_PASSWORD',
  INVALID_FIELDS: 'INVALID_FIELDS',
  EMPTY_EMAIL: 'EMPTY_EMAIL',
  EMPTY_PASSWORD: 'EMPTY_PASSWORD',
  UNDEFINED_TOKEN: 'UNDEFINED_TOKEN',
  UNDEFINED_NAME: 'UNDEFINED_NAME',
  UNDEFINED_TITLE: 'UNDEFINED_TITLE',
  UNDEFINED_CONTENT: 'UNDEFINED_CONTENT',
  UNDEFINED_CATEGORY_ID: 'UNDEFINED_CATEGORY_ID',
  CATEGORY_DONT_EXIST: 'CATEGORY_DONT_EXIST',
  POST_NOT_EXIST: 'POST_NOT_EXIST',
};

module.exports = {
  validateIfFieldExist,
  validateFieldMinLength,
  validateFieldLength,
  validateIfFieldAreNotEmpty,
  errorNames,
};