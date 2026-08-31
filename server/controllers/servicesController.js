const fs = require('fs').promises;
const path = require('path');

const filePath = path.join(__dirname, '../data/services.json');

// Get all services
exports.getServices = async (req, res) => {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    res.status(200).json(JSON.parse(data));
  } catch (error) {
    res.status(500).json({ error: 'Failed to read services data' });
  }
};

// Create a new service
exports.createService = async (req, res) => {
  try {
    const fileData = await fs.readFile(filePath, 'utf8');
    const services = JSON.parse(fileData);

    const newService = {
      id: Date.now().toString(),
      title: req.body.title,
      description: req.body.description,
      icon: req.body.icon || 'FaTooth'
    };

    services.push(newService);
    await fs.writeFile(filePath, JSON.stringify(services, null, 2), 'utf8');
    res.status(201).json({ message: 'Service created successfully', data: newService });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create service' });
  }
};

// Update an existing service
exports.updateService = async (req, res) => {
  try {
    const { id } = req.params;
    const fileData = await fs.readFile(filePath, 'utf8');
    let services = JSON.parse(fileData);

    const index = services.findIndex(s => s.id === id);
    if (index === -1) {
      return res.status(404).json({ error: 'Service not found' });
    }

    services[index] = {
      ...services[index],
      ...req.body,
      id
    };

    await fs.writeFile(filePath, JSON.stringify(services, null, 2), 'utf8');
    res.status(200).json({ message: 'Service updated successfully', data: services[index] });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update service' });
  }
};

// Delete a service
exports.deleteService = async (req, res) => {
  try {
    const { id } = req.params;
    const fileData = await fs.readFile(filePath, 'utf8');
    let services = JSON.parse(fileData);

    const filteredServices = services.filter(s => s.id !== id);
    if (filteredServices.length === services.length) {
      return res.status(404).json({ error: 'Service not found' });
    }

    await fs.writeFile(filePath, JSON.stringify(filteredServices, null, 2), 'utf8');
    res.status(200).json({ message: 'Service deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete service' });
  }
};