const express = require('express');
const cors = require('cors');
require('dotenv').config();

const companyRoutes = require('./routes/companyRoutes');
const founderRoutes = require('./routes/founderRoutes');
const servicesRoutes = require('./routes/servicesRoutes');
const contactRoutes = require('./routes/contactRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/company', companyRoutes);
app.use('/api/founder', founderRoutes);
app.use('/api/services', servicesRoutes);
app.use('/api/contact', contactRoutes);

// Health check endpoint
app.get('/', (req, res) => {
  res.status(200).json({ status: 'Ordonto Lab API is running successfully' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});