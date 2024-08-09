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
  matchesCount: {
    type: Number
  },
  win: {
    type: Number
  },
  loss: {
    type: Number
  },
  how_baiter: {
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
  },
  KDR: {
    type: Number,
    default: 0
  },
  ADR: {
    type: Number,
    default: 0
  },
  Matou: {
    type: Number,
    default: 0
  },
  Morreu: {
    type: Number,
    default: 0
  },
  KAST: {
    type: Number,
    default: 0
  },
  MK: {
    type: Number,
    default: 0
  },
  FK: {
    type: Number,
    default: 0
  },
  HS: {
    type: Number,
    default: 0
  },
  BP: {
    type: Number,
    default: 0
  },
  BD: {
    type: Number,
    default: 0
  }
});

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;
