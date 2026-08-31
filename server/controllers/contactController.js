const fs = require('fs').promises;
const path = require('path');

const filePath = path.join(__dirname, '../data/contact.json');

// Get contact details
exports.getContact = async (req, res) => {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    res.status(200).json(JSON.parse(data));
  } catch (error) {
    res.status(500).json({ error: 'Failed to read contact data' });
  }
};

// Update contact details
exports.updateContact = async (req, res) => {
  try {
    const newData = req.body;
    await fs.writeFile(filePath, JSON.stringify(newData, null, 2), 'utf8');
    res.status(200).json({ message: 'Contact data updated successfully', data: newData });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update contact data' });
  }
};