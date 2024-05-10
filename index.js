const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const notificationRoutes = require("./src/routes/notificationRoutes");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const PORT = process.env.PORT ||4000;

// Parse JSON bodies
app.use(bodyParser.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error:", err));

// Routes
app.use("/", notificationRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
