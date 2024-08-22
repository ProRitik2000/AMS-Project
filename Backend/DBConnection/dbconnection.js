const mongoose = require('mongoose');


const DB_OPTIONS=({
 db:'AMS'
}
)
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/AMS');
    console.log('MongoDB connected...');
  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
