// server.js
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
const dbPassword = encodeURIComponent('Jason@0514');
const dbURI = `mongodb+srv://Admin:${dbPassword}@movieticketsystem.xfphv.mongodb.net/?retryWrites=true&w=majority&appName=MovieTicketSystem`;

mongoose.connect(dbURI)
  .then(() => {
    console.log('Connected to MongoDB');
  }).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Import routes
import userRoutes from './routes/users.js';
import movieRoutes from './routes/movies.js';
import paymentRoutes from './routes/payments.js';

// Use routes
app.use('/users', userRoutes);
app.use('/movies', movieRoutes);
app.use('/payments', paymentRoutes);

// Define a simple route
app.get('/', (req, res) => {
  res.send('Welcome to the Movie Ticket System');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
