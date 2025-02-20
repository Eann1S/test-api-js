const Contact = require("../../../models/contact.model");

async function createContact(req, res) {
  const { name, email, phone } = req.body;
  const contact = await Contact.create({ name, email, phone });
  res.status(OK).json(contact);
}

module.exports = { createContact };