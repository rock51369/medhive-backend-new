import mongoose from "mongoose";
const localUri = "mongodb://127.0.0.1:27017/Medhive";
const remoteUri = "mongodb+srv://Atharv-admin:superitachi@cluster0.7sm6f.mongodb.net/Medhive";

const connectDB = async () => {
  try {
    await mongoose.connect(remoteUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

export { connectDB };
