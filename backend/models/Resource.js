const mongoose = require('mongoose');

const ResourceSchema = new mongoose.Schema({
  id: Number,
  title: String,
  description: String,
  add_info: String,
  county: String,
  url: String,
  hours: {
    days_open: String,
    times_open: String },
  phones: {
    number: String,
    ext: String },
  map_tile: String,
  maps: {
    map_address: String,
    street: String,
    city: String,
    state: String,
    zip: String
  }
});

module.exports = mongoose.model('Resources', ResourceSchema );
