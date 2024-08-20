const mongoose = require('mongoose');

// Define the MongoDB URI (replace with your actual connection string)
const dbURI = 'mongodb://localhost:27017/yourDatabaseName';

// Function to connect to the database
const connectDB = async () => {
  try {
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('MongoDB connection failed:', err.message);
    process.exit(1); // Exit process with failure
  }
};

// Export the connection function
module.exports=connectDB;
