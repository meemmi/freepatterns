const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
app.use(cors());

mongoose.connect(process.env.MONGO_URI, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log('Connected to MongoDB');
  }).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

const patternSchema = new mongoose.Schema({
  id: Number,
  patternType: String,
  gender: String,
  garmet: String,
  creator: String,
  itemName: String,
  imagePath: String
});

const Pattern = mongoose.model('Pattern', patternSchema);

app.get('/api/patterns', async (req, res) => {
  try {
    const patterns = await Pattern.find();
    res.json(patterns);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch patterns' });
  }
});

app.listen(4000, () => {
  console.log('Server running on port 4000');
});
