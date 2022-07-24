
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth")

dotenv.config();
const app = express();
async function connectDB() {
  await mongoose.connect(process.env.MOONGODB_URL).then(
    () => { console.log("CS !!"); },
    err => { 
      console.log("Fail !!!");
    }
  );
}

connectDB()

app.use(cors());
app.use(cookieParser());
app.use(express.json());

// ROUTES
app.use('/v1/auth', authRoute)


//Port
PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running ${PORT}`);
});
