import { connectDB } from "../database/connectDb.mjs";
import { Hospital } from "../database/model.mjs";
// Connect to MongoDB
connectDB();

const fetchHospitals = async function () {
  try {
    const hospitals = await Hospital.find();
    return hospitals;  
  } catch (error) {
    return error;
  }
};

export { fetchHospitals };
