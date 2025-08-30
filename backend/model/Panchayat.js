const mongoose = require("mongoose")

const PanchayatSchema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true },
  name: String,
  about: String,
  gallery: [String],
  news: [{ title: String, date: String, desc: String }],
  members: [{ role: String, name: String }],
  contact: {
    address: String,
    phone: String,
    email: String
  },
  social: {
    facebook: String,
    twitter: String,
    instagram: String
  }
});

module.exports = mongoose.model("Panchayat", PanchayatSchema);
