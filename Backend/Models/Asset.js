import mongoose from 'mongoose';

const assetSchema = new mongoose.Schema({
  serialNumber: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['available', 'in-use', 'maintenance'], // Example enum values
    required: true,
  
  }
}, {
  timestamps: true
});

const Asset = mongoose.model('Asset', assetSchema);

export default Asset;
