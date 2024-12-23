const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  name: String,
  location: String,
  time: String,
  date: String,
  description: String,
  agenda: String,
  capacity: Number,
  contact: String,
});

module.exports = mongoose.model("Event", eventSchema);
