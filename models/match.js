const mongoose = require('mongoose');

const matchSchema = new mongoose.Schema({
  id_gc: {
    type: String,
    required: true
  },
  matchData: {
    type: Object,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

const Match = mongoose.model('Match', matchSchema);

module.exports = Match;
