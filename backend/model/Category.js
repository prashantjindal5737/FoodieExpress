const mongoose = require('mongoose');
const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  img: { type: String, required: true },
  category: { type: String, required: true },
  option: { type: Object, required: true },
});
module.exports = mongoose.model('Category', categorySchema);
