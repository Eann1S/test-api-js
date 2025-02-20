const mongoose = require('mongoose');
const contactModel = require('./contact.model');

const companySchema = new mongoose.Schema({
  id: Number,
  contactId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Contact',
  },
  name: String,
  shortName: String,
  businessEntity: String,
  contract: {
    no: String,
    issue_date: String,
  },
  type: [String],
  status: String,
  photos: [
    {
      name: String,
      filepath: String,
      thumbpath: String,
    },
  ],
  address: String,
  createdAt: Date,
  updatedAt: Date,
});

module.exports = mongoose.model('Company', companySchema); 