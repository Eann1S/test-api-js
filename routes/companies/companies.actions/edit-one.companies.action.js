const logger = require("../../../services/logger.service")(module);
const { OK } = require("../../../constants/http-codes");
const { parseOne } = require("../companies.service");
const { getUrlForRequest } = require("../../../helpers/url.helper");
const { NotFound } = require("../../../constants/errors");
const Company = require("../../../models/company.model");
/**
 * PATCH /companies/:id
 * Эндпоинт редактирования данных компании.
 * @param {Object} req
 * @param {Object} res
 * @return {Promise<void>}
 */
async function editOne(req, res) {
  logger.init("edit company");
  const { id } = req.params;
  const data = req.body;

  const company = await Company.findByIdAndUpdate(id, data, { new: true });
  if (!company) {
    throw new NotFound("Company not found");
  }

  const photoUrl = getUrlForRequest(req);
  res.status(OK).json(parseOne(company, photoUrl));
  logger.success();
}

module.exports = {
  editOne,
};
