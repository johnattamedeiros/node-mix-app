const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  nick: {
    type: String
  },
  id_steam: {
    type: String
  },
  id_last_match: {
    type: Number,
    default: 0
  },
  stat: {
    type: Object
  },
  level: {
    type: Number
  },
  id_gc: {
    type: String,
    required: true
  },
  url_photo: {
    type: String
  },
  url_gc_level: {
    type: String
  }
});

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;
