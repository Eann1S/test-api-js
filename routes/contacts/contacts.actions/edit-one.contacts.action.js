const logger = require("../../../services/logger.service")(module);
const { OK } = require("../../../constants/http-codes");
const Contact = require("../../../models/contact.model");
const { NotFound } = require("../../../constants/errors");

/**
 * PATCH /contacts/:id
 * Эндпоинт редактирования данных контакта.
 * @param {Object} req
 * @param {Object} res
 * @return {Promise<void>}
 */
async function editOne(req, res) {
  logger.init("edit contact");
  const { id } = req.params;
  const data = req.body;

  const contact = await Contact.findByIdAndUpdate(id, data, { new: true });
  if (!contact) {
    throw new NotFound("Contact not found");
  }

  res.status(OK).json(contact);
  logger.success();
}

module.exports = {
  editOne,
};
