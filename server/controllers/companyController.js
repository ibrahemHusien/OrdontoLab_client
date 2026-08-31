const fs = require('fs').promises;
const path = require('path');

const filePath = path.join(__dirname, '../data/company.json');

// Get company details
exports.getCompany = async (req, res) => {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    res.status(200).json(JSON.parse(data));
  } catch (error) {
    res.status(500).json({ error: 'Failed to read company data' });
  }
};

// Update company details
exports.updateCompany = async (req, res) => {
  try {
    const newData = req.body;
    await fs.writeFile(filePath, JSON.stringify(newData, null, 2), 'utf8');
    res.status(200).json({ message: 'Company data updated successfully', data: newData });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update company data' });
  }
};