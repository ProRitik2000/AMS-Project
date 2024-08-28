import Asset from '../Models/Asset.js';

// Create a new asset
export const addAssets = async (req, res) => {
  try {
    const {  serialNumber,name, type,  status } = req.body;
    const newAsset = new Asset({ serialNumber,name, type, status });
    await newAsset.save();
    res.status(201).json({ message: 'Asset saved successfully', asset: newAsset });
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Error adding asset', error: error.message });
  }
};

// Get all assets
export const getAllAssets = async (req, res) => {
  try {
    const assets = await Asset.find();
    res.status(200).json(assets);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving assets', error: error.message });
  }
};

// Get a single asset by ID
export const getAssetById = async (req, res) => {
  try {
    const asset = await Asset.findById(req.params.id);
    if (!asset) {
      return res.status(404).json({ message: 'Asset not found' });
    }
    res.status(200).json(asset);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving asset', error: error.message });
  }
};

// Update an asset by ID
export const updateAsset = async (req, res) => {
  try {
    const asset = await Asset.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!asset) {
      return res.status(404).json({ message: 'Asset not found' });
    }
    res.status(200).json({ message: 'Asset updated successfully', asset });
  } catch (error) {
    res.status(500).json({ message: 'Error updating asset', error: error.message });
  }
};

// Delete an asset by ID
export const deleteAsset = async (req, res) => {
  try {
    const asset = await Asset.findByIdAndDelete(req.params.id);
    if (!asset) {
      return res.status(404).json({ message: 'Asset not found' });
    }
    res.status(200).json({ message: 'Asset deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting asset', error: error.message });
  }
};
