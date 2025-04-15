const mongoose = require('mongoose');
const carSchema = new mongoose.Schema({
  name: String,
  imageUrl: String,
  tokenRatePerHour: Number,
  owners: [String], // userIds
});
module.exports = mongoose.model('Car', carSchema);
