const validateIfFieldExist = (field) => field !== undefined || field.trim().length > 0;
const validateFieldMinLength = (field, minLength) => field.trim().length >= minLength;

module.exports = {
  validateIfFieldExist,
  validateFieldMinLength,
};