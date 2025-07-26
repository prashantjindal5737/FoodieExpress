const mongoose = require('mongoose');
const foodItemSchema = new mongoose.Schema({
  name: String,
  img1: String,
  category: String,
  option: Object
});
module.exports = mongoose.model('FoodItem', foodItemSchema);
