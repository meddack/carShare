const express = require('express');
const router = express.Router();
const Car = require('../models/car');

// GET all cars
router.get('/', async (req, res) => {
  const cars = await Car.find();
  res.json(cars);
});

// GET car by ID
router.get('/:id', async (req, res) => {
  const car = await Car.findById(req.params.id);
  res.json(car);
});

// POST add new car (admin)
router.post('/admin', async (req, res) => {
  const car = new Car(req.body);
  await car.save();
  res.json(car);
});

module.exports = router;
