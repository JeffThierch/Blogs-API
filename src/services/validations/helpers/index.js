const validateIfFieldExist = (field) => field !== undefined; 
const validateFieldMinLength = (field, minLength) => field.trim().length >= minLength;
const validateFieldLength = (field, fieldLength) => field.trim().length === fieldLength;

const errorNames = {
  USER_ALREADY_EXIST: 'USER_ALREADY_EXIST',
  SHORT_DISPLAY_NAME: 'SHORT_DISPLAY_NAME',
  WRONG_PASSWORD_LENGTH: 'WRONG_PASSWORD_LENGTH',
  INVALID_EMAIL: 'INVALID_EMAIL',
  UNDEFINED_DISPLAY_NAME: 'UNDEFINED_DISPLAY_NAME',
  UNDEFINED_EMAIL: 'UNDEFINED_EMAIL',
  UNDEFINED_PASSWORD: 'UNDEFINED_PASSWORD',
};

module.exports = {
  validateIfFieldExist,
  validateFieldMinLength,
  validateFieldLength,
  errorNames,
};