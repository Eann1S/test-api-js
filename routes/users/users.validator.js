const { check } = require("express-validator");
const { UnprocessableEntity } = require("../../constants/errors");
const validate = require("../../middleware/validation.middleware");

const getAuth = [
  check("user")
    .notEmpty()
    .withMessage({
      code: UnprocessableEntity,
      message: "user: parameter is required",
    })
    .bail()
    .custom((value) => value.id)
    .withMessage({
      code: UnprocessableEntity,
      message: "user.id: parameter is required",
    }),
  validate,
];

const registerUser = [
  check("email")
    .notEmpty()
    .withMessage({
      code: UnprocessableEntity,
      message: "email: parameter is required",  
    }),
  validate,
];

const loginUser = [
  check("email")
    .notEmpty()
    .withMessage({
      code: UnprocessableEntity,
      message: "email: parameter is required",  
    }),
  validate,
];


module.exports = { getAuth, registerUser, loginUser };
