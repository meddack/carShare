const mongoose = require('mongoose');
const bookingSchema = new mongoose.Schema({
  carId: String,
  userId: String,
  date: String,
  from: String,
  to: String,
});
module.exports = mongoose.model('Booking', bookingSchema);
