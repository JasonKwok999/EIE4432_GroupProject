// models/Movie.js
import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
  movie_name: { type: String, required: true },
  theater_date: { type: Date, required: true },
  theater_time: { type: String, required: true },
  movie_duration: { type: Number, required: true },
  seat_no_taken: { type: [Number], default: [] },
});

export default mongoose.model('Movie', movieSchema);
