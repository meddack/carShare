const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Mongo connected'))
  .catch(err => console.log(err));

// Routes
app.use('/api/cars', require('./routes/cars'));
app.use('/api/bookings', require('./routes/bookings'));
app.use('/api/wallet', require('./routes/wallet'));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
