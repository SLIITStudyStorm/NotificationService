const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const notificationRoutes = require('./src/routes/notificationRoutes');

const app = express();
const PORT = process.env.PORT || 4000;

// Parse JSON bodies
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb+srv://avishkanuwan73:12345Avishka@cluster0.ijwojwx.mongodb.net/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
app.use('/', notificationRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
