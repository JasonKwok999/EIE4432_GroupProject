// server.js
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cookieParser.json());

// Connect to MongoDB
const dbPassword = encodeURIComponent('Jason@0514');
const dbURI = `mongodb+srv://Admin:${dbPassword}@movieticketsystem.xfphv.mongodb.net/?retryWrites=true&w=majority&appName=MovieTicketSystem`;

mongoose.connect(dbURI)
  .then(() => {
    console.log('Connected to MongoDB');
  }).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

  // Seed admin user
const seedAdminUser = async () => {
  const adminExists = await User.findOne({ username: 'admin' });
  if (!adminExists) {
    const admin = new User({
      username: 'admin',
      password: 'adminpass',
      email: 'admin@example.com',
      nickname: 'Admin',
      gender: 'Other',
      birthdate: new Date('1970-01-01'),
      role: 'admin'
    });
    await admin.save();
  }
};

// Call this function when your server starts
seedAdminUser();

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
