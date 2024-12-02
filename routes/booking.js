// routes/bookings.js
const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

// Add a new booking with seat selection
router.post('/', async (req, res) => {
  const { movieId, customerName, seats } = req.body;
  const booking = new Booking({ movieId, customerName, seats });
  await booking.save();
  res.json(booking);
});

// Get a booking by ID
router.get('/:id', async (req, res) => {
  const booking = await Booking.findById(req.params.id).populate('movieId');
  res.json(booking);
});

// Update a booking
router.put('/:id', async (req, res) => {
  const { seats } = req.body;
  const booking = await Booking.findByIdAndUpdate(req.params.id, { seats }, { new: true });
  res.json(booking);
});

// Delete a booking
router.delete('/:id', async (req, res) => {
  await Booking.findByIdAndDelete(req.params.id);
  res.json({ message: 'Booking deleted' });
});

module.exports = router;
