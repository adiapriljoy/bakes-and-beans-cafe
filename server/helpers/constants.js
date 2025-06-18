const UNIQUE_FIELD_ERRORS = {
  emp_email: "An employee with this email already exists.",
};

const ERROR_MESSAGES = {
  ...UNIQUE_FIELD_ERRORS,
  REQUIRED_FIELDS: "Missing required fields.",
  SERVER_ERROR: "Something went wrong on the server.",
};

module.exports = ERROR_MESSAGES;
