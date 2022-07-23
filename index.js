const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const app = express();

async function connectDB() {
  await mongoose.connect("mongodb://localhost:27017").then(
    () => { console.log("CS !!"); },
    err => { throw(err) }
  );
}

connectDB()

app.use(cors());
app.use(cookieParser());
app.use(express.json());

PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running ${PORT}`);
});
