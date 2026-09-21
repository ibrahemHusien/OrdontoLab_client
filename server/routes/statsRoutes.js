const express = require('express');
const router = express.Router();
const Visit = require('../models/Visit');

router.get('/admin/stats', async (req, res) => {
  try {
    let stats = await Visit.findOne();
    if (!stats) {
      stats = await Visit.create({ totalVisits: 0 });
    }
    res.status(200).json({ totalVisits: stats.totalVisits });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/track-visit', async (req, res) => {
  try {
    const stats = await Visit.findOneAndUpdate(
      {},
      { $inc: { totalVisits: 1 } },
      { new: true, upsert: true }
    );
    res.status(200).json({ success: true, totalVisits: stats.totalVisits });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;