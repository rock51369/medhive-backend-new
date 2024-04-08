import { connectDB } from "../database/connectDb.mjs";
import { Hospital } from "../database/model.mjs";
// Connect to MongoDB
connectDB();

const fetchhospitalsbyname = async function (searchTerm) {
    try {
      const hospital = await Hospital.find({
        Hospital_Name: { $regex: `^${searchTerm}`, $options: 'i' } }).exec();
      return hospital;
    } catch (error) {
      return error;
    }
  };

export { fetchhospitalsbyname };
