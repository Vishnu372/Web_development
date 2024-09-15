const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');  
const app = express();
const PORT = 5000;

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true               
}));

app.use(express.json()); 

mongoose.connect('mongodb://localhost:27017/collegeDB')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Failed to connect to MongoDB:', err));


  const collegeSchema = new mongoose.Schema({
    'College Code': Number,                
    'College Name': String,                
    'OC AVG': Number,                     
    'PUBLIC PERCEPTION RANK': Number     
  });
  


const College = mongoose.model('College', collegeSchema);

app.get('/search', async (req, res) => {
  const query = req.query.q;
  
  try {
    let colleges;
    
    if (query) {
      colleges = await College.find({
        'College Name': { $regex: query, $options: 'i' } 
      });
    } else {
      colleges = await College.find(); 
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
