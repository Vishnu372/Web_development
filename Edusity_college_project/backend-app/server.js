const express = require('express');
const cors = require('cors'); 
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());
mongoose.connect('mongodb://localhost:27017/registrationDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const registrationSchema = new mongoose.Schema({
  name: String,
  degree: String,
  age: Number,
  email: String,
  contactNumber: String,
});

const Registration = mongoose.model('Registration', registrationSchema);
app.post('/api/register', async (req, res) => {
  try {
    const { name, degree, age, email, contactNumber } = req.body;
    const registration = new Registration({ name, degree, age, email, contactNumber });
    await registration.save();
    res.status(201).json({ message: 'Registration successful' });
  } catch (error) {
    res.status(500).json({ message: 'Registration failed', error });
  }
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
