const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    console.log(`mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@177.153.51.71:27017/mydatabase?authSource=admin`);
    const uri = process.env.MONGO_URI || `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@177.153.51.71:27017/mydatabase?authSource=admin`;
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
};

module.exports = connectDB;
