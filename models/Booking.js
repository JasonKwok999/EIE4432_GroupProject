// models/Booking.js
const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  movieId: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie' },
  customerName: String,
  seats: [String], // Array to store selected seat numbers
  bookingDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Booking', bookingSchema);
