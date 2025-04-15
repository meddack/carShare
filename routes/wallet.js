const express = require('express');
const router = express.Router();
const Wallet = require('../models/wallet');

// Buy tokens
router.post('/', async (req, res) => {
  const { userId, amount } = req.body;
  let wallet = await Wallet.findOne({ userId });

  if (!wallet) {
    wallet = new Wallet({ userId, tokens: amount });
  } else {
    wallet.tokens += amount;
  }

  await wallet.save();
  res.json(wallet);
});

module.exports = router;
