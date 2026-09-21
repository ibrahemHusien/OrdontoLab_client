const fs = require('fs').promises;
const path = require('path');

const filePath = path.join(__dirname, '../data/company.json');

exports.getCompany = async (req, res) => {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    res.status(200).json(JSON.parse(data));
  } catch (error) {
    res.status(500).json({ error: 'Failed to read company data' });
  }
};

exports.updateCompany = async (req, res) => {
  try {
    const newData = req.body;
    await fs.writeFile(filePath, JSON.stringify(newData, null, 2), 'utf8');
    res.status(200).json({ message: 'Company data updated successfully', data: newData });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update company data' });
  }
};

exports.trackVisit = async (req, res) => {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    const companyData = JSON.parse(data);
    companyData.visits = (companyData.visits || 0) + 1;
    await fs.writeFile(filePath, JSON.stringify(companyData, null, 2), 'utf8');
    res.status(200).json({ message: 'Visit tracked successfully', visits: companyData.visits });
  } catch (error) {
    res.status(500).json({ error: 'Failed to track visit' });
  }
};