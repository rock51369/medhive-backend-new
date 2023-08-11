import express from "express";
import cors from "cors";

import { connectDB } from "./database/connectDb.mjs";
import { Hospital } from "./database/model.mjs";
import { fetchHospitals } from "./utils/fetchHospitals.mjs";
import { fetchIndividualHospital } from "./utils/fetchIndividualHospital.mjs";

const app = express();
const port = 4000;
// Use the cors middleware
app.use(cors());

// Connect to MongoDB
connectDB();

// Basic route
app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.get("/hospitals", async (req, res) => {
  const fetchedHospitals = await fetchHospitals();
  res.send(fetchedHospitals);
});

app.get("/Hospitaldetails", async (req, res) => {
  const id = req.query.ID;
  res.setHeader("Cache-Control", "no-store");
  try {
    const response = await fetchIndividualHospital(id);
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(response));
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
