var express = require("express");
var router = express.Router();
// auth.js
const { hash } = require("bcryptjs");
var express = require("express");
var router = express.Router();
const User = require("../models/user"); // adjust the path based on your project structure

// Your authentication routes can use the User model now
router.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Create a new user using the User model
    const newUser = new User({ email, password });
    
    // Save the user to the database
    await newUser.save();

    // Respond with success message or token, etc.
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    // Handle errors, e.g., duplicate email, validation errors, etc.
    res.status(400).json({ error: error.message });
  }
});

 router.get('/signup', (req, res) => {
    try {
        const { email, password } = req.body;
        // 1. check if user already exists
        const user = await User.findOne({ email: email });
    
        // if user exists already, return error
        if (user)
          return res.status(500).json({
            message: "User already exists! Try logging in. 😄",
            type: "warning",
        });
    ); 
// Other authentication routes...
module.exports = router;
