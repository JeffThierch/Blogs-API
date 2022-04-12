const validateIfFieldExist = (field) => field !== undefined || field !== null;
const validateFieldMinLength = (field, minLength) => field.trim().length >= minLength;
const validateFieldLength = (field, fieldLength) => field.trim().length === fieldLength;

module.exports = {
  validateIfFieldExist,
  validateFieldMinLength,
  validateFieldLength,
};