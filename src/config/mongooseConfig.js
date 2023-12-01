import mongoose from 'mongoose';

// Function to establish a connection to the MongoDB database using Mongoose
export const connectUsingMongoose = async () => {
  try {
    // Attempting to connect to the MongoDB database
    await mongoose.connect('mongodb://127.0.0.1:27017/ecommerceapi', {
      useNewUrlParser: true, // Using the new URL parser
      useUnifiedTopology: true // Using the new Server Discover and Monitoring engine
    });
    console.log('MongoDB connected using Mongoose.');
  } catch (err) {
    console.error('Error while connecting to Database.', err);
  }
};
