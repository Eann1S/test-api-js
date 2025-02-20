const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  id: Number,
  lastname: String,
  firstname: String,
  patronymic: String,
  phone: String,
  email: String,
  createdAt: Date,
  updatedAt: Date,
  
  });

module.exports = mongoose.model('Contact', contactSchema);