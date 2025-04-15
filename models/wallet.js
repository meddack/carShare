const mongoose = require('mongoose');
const walletSchema = new mongoose.Schema({
  userId: String,
  tokens: Number,
});
module.exports = mongoose.model('Wallet', walletSchema);
