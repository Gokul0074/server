const express=require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const cors = require('cors');

const apps = express();
apps.use(express.json());
apps.use(cors());
apps.use('/api/auth', authRoutes);


mongoose.connect("mongodb://localhost:27017/")
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));
const port = 5500
apps.listen() 
apps.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });


