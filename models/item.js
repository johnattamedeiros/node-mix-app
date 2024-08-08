const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  property: {
    type: String,
    required: true
  }
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
