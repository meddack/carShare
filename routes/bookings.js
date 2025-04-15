const express = require('express');
const router = express.Router();
const Booking = require('../models/booking');
const Wallet = require('../models/wallet');
const Car = require('../models/car');

// POST book a car
router.post('/', async (req, res) => {
  const { userId, carId, date, from, to } = req.body;
  const car = await Car.findById(carId);
  const wallet = await Wallet.findOne({ userId });

  const hours = parseInt(to) - parseInt(from);
  const requiredTokens = car.tokenRatePerHour * hours;

  if (wallet.tokens < requiredTokens) {
    return res.status(400).json({ msg: 'Not enough tokens' });
  }

  wallet.tokens -= requiredTokens;
  await wallet.save();

  const booking = new Booking({ userId, carId, date, from, to });
  await booking.save();

  res.json({ msg: 'Car booked', booking });
});

module.exports = router;
