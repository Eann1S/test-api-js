const Company = require("../../../models/company.model");

async function createCompany(req, res) {
  const { name, status, type, address, contacts } = req.body;
  const company = new Company({ name, status, type, address, contacts });
  await company.save();
  res.status(201).json(company);
}

module.exports = { createCompany };
