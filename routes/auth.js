const express = require('express')
const user = require('../models/user')
const router = express.Router();


router.post('/register', async (req, res) => {
    const { username, email, password, phone, location } = req.body;
     console.log(req.body);
    try{
        const newuser = new user({username, email, password, phone, location });
        await newuser.save();
        res.status(201).json({message: 'User registered successfully' });
    } catch (error){
        res.status(500).json({error: error.message});
        //console.log("The username is already registered");
        console.log(error);
    }
});



router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
      const User = await user.findOne({ email });
      if (!User) {
        return res.status(404).json({ message: 'User not found' });
      }
    
      if (User.password !== password) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }
  
      res.status(200).json({ message: 'Login successful', User });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});


module.exports =  router;