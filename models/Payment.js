// models/Payment.js
import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema({
  creditcard_id: { type: String, required: true },
  password: { type: String, required: true },
  CVV: { type: String, required: true },
  expire_date: { type: Date, required: true },
});

export default mongoose.model('Payment', paymentSchema);
