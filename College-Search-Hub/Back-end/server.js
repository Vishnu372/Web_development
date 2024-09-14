const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');  // Import cors

const app = express();
const PORT = 5000;

// Middleware
app.use(cors({
  origin: 'http://localhost:5173', // Allow requests from your frontend URL
  credentials: true               // If you need to handle credentials like cookies
}));

app.use(express.json()); // Parse JSON request bodies

mongoose.connect('mongodb://localhost:27017/collegeDB')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Failed to connect to MongoDB:', err));


  const collegeSchema = new mongoose.Schema({
    'College Code': Number,                // Match the field name 'College Code'
    'College Name': String,                // Match the field name 'College Name'
    'OC AVG': Number,                      // Match the field name 'OC AVG'
    'PUBLIC PERCEPTION RANK': Number      // Match the field name 'PUBLIC PERCEPTION RANK'
  });
  


const College = mongoose.model('College', collegeSchema);

// Search API endpoint
app.get('/search', async (req, res) => {
  const query = req.query.q;
  
  try {
    let colleges;
    
    if (query) {
      colleges = await College.find({
        'College Name': { $regex: query, $options: 'i' } // Case-insensitive search on 'College Name'
      });
    } else {
      colleges = await College.find(); // Return all colleges if no query
    }
    
    res.json(colleges);
  } catch (error) {
    console.error('Error fetching colleges:', error);
    res.status(500).send('Error fetching colleges');
  }
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
