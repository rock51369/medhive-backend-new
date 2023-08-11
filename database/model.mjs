import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema({
  H_No: {
    type: String,
  },
  Hospital_Name: {
    type: String,
  },
  Place: {
    type: String,
  },
  Total_Doctors: {
    type: Number,
  },
  Total_Beds: {
    type: Number,
  },
  MortailityRate: {
    type: Number,
  },
  Cleanliness_Score: {
    type: Number,
  },
  Specialties_Present: {
    type: String,
  },
  Total_Specialties_Present: {
    type: Number,
  },
  Stars: {
    type: Number,
  },
  Image: {
    type: String,
  }
});

const Hospital = mongoose.model('Hospital', hospitalSchema);

export { Hospital };