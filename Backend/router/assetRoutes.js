import express from 'express';
import {
  createAsset,
  getAssets,
  getAssetById,
  updateAsset,
  deleteAsset
} from '../controllers/assetController.js';

const router1 = express.Router();

// Create a new asset
router1.post('/', createAsset);

// Read all assets
router1.get('/', getAssets);

// Read a single asset
router1.get('/:id', getAssetById);

// Update an asset
router1.put('/:id', updateAsset);

// Delete an asset
router1.delete('/:id', deleteAsset);

export default router1;
