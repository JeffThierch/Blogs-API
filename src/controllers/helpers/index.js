const errorsObj = {
  USER_ALREADY_EXIST: { code: 409, message: 'User already registered' },
  UNDEFINED_DISPLAY_NAME: { code: 400, message: '"displayName" is required' },
  UNDEFINED_EMAIL: { code: 400, message: '"email" is required' },
  UNDEFINED_PASSWORD: { code: 400, message: '"password" is required' },
  SHORT_DISPLAY_NAME: { 
    code: 400, 
    message: '"displayName" length must be at least 8 characters long', 
  },
  WRONG_PASSWORD_LENGTH: { code: 400, message: '"password" length must be 6 characters long' },
  INVALID_EMAIL: { code: 400, message: '"email" must be a valid email' },
  INVALID_FIELDS: { code: 400, message: 'Invalid fields' },
  EMPTY_PASSWORD: { code: 400, message: '"password" is not allowed to be empty' },
  EMPTY_EMAIL: { code: 400, message: '"email" is not allowed to be empty' },
  UNDEFINED_TOKEN: { code: 401, message: 'Token not found' },
  USER_NOT_EXIST: { code: 404, message: 'User does not exist' },
  'jwt malformed': { code: 401, message: 'Expired or invalid token' },
  'invalid token': { code: 401, message: 'Expired or invalid token' },
  'jwt expired': { code: 401, message: 'Expired or invalid token' },
};

module.exports = {
  errorsObj,
};