const errorsObj = {
  USER_ALREADY_EXIST: { code: 409, message: 'User already registered' },
  UNDEFINED_DISPLAY_NAME: { code: 400, message: '"displayName" is required' },
  UNDEFINED_EMAIL: { code: 400, message: '"email" is required' },
  UNDEFINED_PASSWORD: { code: 400, message: '"password" is required' },
  SHORT_DISPLAY_NAME: { 
    code: 400, 
    message: '"displayName" length must be at least 8 charecteres long', 
  },
  SHORT_PASSWORD: { code: 400, message: '"password" length must be at least 6 charecteres long' },
  INVALID_EMAIL: { code: 400, message: '"email" must be a valid email' },
};

module.exports = {
  errorsObj,
};