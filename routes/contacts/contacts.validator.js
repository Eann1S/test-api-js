const { check } = require("express-validator");
const { UnprocessableEntity } = require("../../constants/errors");
const validate = require("../../middleware/validation.middleware");

const getOne = [
  check("id").isNumeric().withMessage({
    code: UnprocessableEntity,
    message: "id: parameter has incorrect format",
  }),
  validate,
];

const editOne = [
  check("id").isNumeric().withMessage({
    code: UnprocessableEntity,
    message: "id: parameter has incorrect format",
  }),
  validate,
];

const createContact = [
  check("name").isString().withMessage({
    code: UnprocessableEntity,
    message: "name: parameter has incorrect format",
  }),
  check("email").isEmail().withMessage({
    code: UnprocessableEntity,
    message: "email: parameter has incorrect format",
  }),
  check("phone").isString().withMessage({
    code: UnprocessableEntity,
    message: "phone: parameter has incorrect format",
  }),
  validate,
];

const deleteContact = [
  check("id").isNumeric().withMessage({
    code: UnprocessableEntity,
    message: "id: parameter has incorrect format",
  }),
  validate,
];

module.exports = { getOne, editOne, createContact, deleteContact };
