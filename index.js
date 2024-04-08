import express from "express";
import cors from "cors";

import { connectDB } from "./database/connectDb.mjs";
import { Hospital } from "./database/model.mjs";
import { fetchHospitals } from "./utils/fetchHospitals.mjs";
import { fetchNews } from "./utils/fetchNews.mjs";
import { fetchIndividualHospital } from "./utils/fetchIndividualHospital.mjs";
import { fetchhospitalsbyname } from "./utils/fetchhospitalsbyname.mjs";

const app = express();
const port = process.env.PORT || 4000; // Use the cors middleware
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
  console.log(req.query.ID);
  res.setHeader("Cache-Control", "no-store");
  try {
    const response = await fetchIndividualHospital(id);
    console.log(response);
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(response));
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/News", async (req, res) => {
  res.setHeader("Cache-Control", "no-store");
  try {
    const response = await fetchNews();
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(response));
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/form_details",async(req,res)=>{
  try{
    const ID = req.query.ID;
    const response = await fetchIndividualHospital(ID);
    // console.log(ID);
    // console.log(response);
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(response));``
    res.status(200);
  }catch(err){
    res.status(500).json({ error: "Internal Server Error" });
    console.log(err);
  }
})

app.get("/hospitalbyname", async (req,res) => {
  const name = req.query.hospitalbyname;
  res.setHeader("Cache-Control", "no-store");
  try {
    const response = await fetchhospitalsbyname(name);
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(response));
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
}});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
