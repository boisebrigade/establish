const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
  id: Number,
  title: String,
  image: String
});

module.exports = mongoose.model('Categories', CategorySchema );
