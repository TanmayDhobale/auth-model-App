var express = require("express");
var router = express.Router();
// auth.js

const {  compare } = require("bcryptjs");
const { hash } = require("bcryptjs");
var express = require("express");
var router = express.Router();
// adjust the path based on your project structure

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

const User = require("../models/user");
// Sign Up request
router.post("/signup", async (req, res) => {
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
    // 2. if user doesn't exist, create a new user
    // hashing the password
    const passwordHash = await hash(password, 10);
    const newUser = new User({
      email: email,
      password: passwordHash,
    });
    // 3. save the user to the database
    await newUser.save();
    // 4. send the response
    res.status(200).json({
      message: "User created successfully! 🥳",
      type: "success",
    });
  } catch (error) {
    res.status(500).json({
      type: "error",
      message: "Error creating user!",
      error,
    });
  }
     // 5. send the response
     sendRefreshToken(res, refreshToken);
     sendAccessToken(req, res, accessToken);
   } catch (error) {
     res.status(500).json({
       type: "error",
       message: "Error signing in!",
       error,
     });
   }
});

const {
  createAccessToken,
  createRefreshToken,
  sendAccessToken,
  sendRefreshToken,
} = require("../utils/tokens");
module.exports = router;
