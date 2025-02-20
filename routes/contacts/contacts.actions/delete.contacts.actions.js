const { NotFound } = require("../../../constants/errors");
const Contact = require("../../../models/contact.model");

async function deleteContact(req, res) {
  const { id } = req.params;
  const contact = await Contact.findByIdAndDelete(id);
  if (!contact) {
    throw new NotFound("Contact not found");
  }
  res.status(OK).json(contact);
}

module.exports = { deleteContact };