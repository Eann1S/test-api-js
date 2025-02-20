const Company = require("../../../models/company.model");

async function getCompanies(req, res) {
  const { status, type, page = 1, limit = 10, sort } = req.query;
  const companies = await Company.find({ status, type }).sort(sort).skip((page - 1) * limit).limit(Number(limit));
  res.json(companies);
}

module.exports = { getCompanies };