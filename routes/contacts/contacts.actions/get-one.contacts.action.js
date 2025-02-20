const logger = require("../../../services/logger.service")(module);
const { OK } = require("../../../constants/http-codes");
const Contact = require("../../../models/contact.model");
const { NotFound } = require("../../../constants/errors");

/**
 * GET /contacts/:id
 * Эндпоинт получения данных контакта.
 * @param {Object} req
 * @param {Object} res
 * @return {Promise<void>}
 */
async function getOne(req, res) {
  logger.init("get contact");
  const { id } = req.params;

  const contact = await Contact.findById(id);
  if (!contact) {
    throw new NotFound("Contact not found");
  }

  res.status(OK).json(contact);
  logger.success();
}

module.exports = {
  getOne,
};
