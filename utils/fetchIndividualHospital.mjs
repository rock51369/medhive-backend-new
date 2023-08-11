import { connectDB } from "../database/connectDb.mjs";
import { Hospital } from "../database/model.mjs";
// Connect to MongoDB
connectDB();

const fetchIndividualHospital = async function (H_No) {
    try {
      const hospital = await Hospital.findOne({ H_No: H_No });
      return hospital;
    } catch (error) {
      return error;
    }
  };

export { fetchIndividualHospital };
