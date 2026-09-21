const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const companyRoutes = require('./routes/companyRoutes');
const founderRoutes = require('./routes/founderRoutes');
const servicesRoutes = require('./routes/servicesRoutes');
const contactRoutes = require('./routes/contactRoutes');
const statsRoutes = require('./routes/statsRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI || process.env.DATABASE_URL)
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.error('MongoDB Error:', err));

app.use(cors());
app.use(express.json());

app.use('/api/company', companyRoutes);
app.use('/api/founder', founderRoutes);
app.use('/api/services', servicesRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api', statsRoutes);

app.get('/', (req, res) => {
  res.status(200).json({ status: 'Ordonto Lab API is running successfully' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});