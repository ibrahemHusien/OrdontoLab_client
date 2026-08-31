const fs = require('fs').promises;
const path = require('path');

const filePath = path.join(__dirname, '../data/founder.json');

// Get founder details
exports.getFounder = async (req, res) => {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    res.status(200).json(JSON.parse(data));
  } catch (error) {
    res.status(500).json({ error: 'Failed to read founder data' });
  }
};

// Update founder details
exports.updateFounder = async (req, res) => {
  try {
    const newData = req.body;
    await fs.writeFile(filePath, JSON.stringify(newData, null, 2), 'utf8');
    res.status(200).json({ message: 'Founder data updated successfully', data: newData });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update founder data' });
  }
};