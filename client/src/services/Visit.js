const mongoose = require('mongoose');

const VisitSchema = new mongoose.Schema({
  totalVisits: { type: Number, default: 0 }
});

module.exports = mongoose.model('Visit', VisitSchema);