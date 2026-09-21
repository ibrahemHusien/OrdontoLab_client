const express = require('express');
const cors = require('cors');
require('dotenv').config();

const companyRoutes = require('./routes/companyRoutes');
const founderRoutes = require('./routes/founderRoutes');
const servicesRoutes = require('./routes/servicesRoutes');
const contactRoutes = require('./routes/contactRoutes');
const Visit = require('./models/Visit');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/company', companyRoutes);
app.use('/api/founder', founderRoutes);
app.use('/api/services', servicesRoutes);
app.use('/api/contact', contactRoutes);

app.post('/api/track-visit', async (req, res) => {
  try {
    let stats = await Visit.findOne();
    if (!stats) {
      stats = new Visit({ totalVisits: 1 });
    } else {
      stats.totalVisits += 1;
    }
    await stats.save();
    res.status(200).json({ success: true, totalVisits: stats.totalVisits });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/admin/stats', async (req, res) => {
  try {
    const stats = await Visit.findOne();
    res.status(200).json({ totalVisits: stats ? stats.totalVisits : 0 });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/', (req, res) => {
  res.status(200).json({ status: 'Ordonto Lab API is running successfully' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});