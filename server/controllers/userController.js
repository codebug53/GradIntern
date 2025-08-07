import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import User from "../models/userModel.js";

// Get current user profile
export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findOne({ clerkId: req.user.id });
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: "Error fetching user profile" });
  }
};

// Save or update resume URL for the user
export const uploadResume = async (req, res) => {
  try {
    const resumeUrl = req.file.path;

    const user = await User.findOneAndUpdate(
      { clerkId: req.user.id },
      { resumeUrl },
      { new: true, upsert: true }
    );

    res.status(200).json({ message: "Resume uploaded successfully", resumeUrl });
  } catch (err) {
    res.status(500).json({ error: "Error uploading resume" });
  }
};


// POST /users/register
export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // 1) Prevent duplicate emails
    if (await User.findOne({ email })) {
      return res.status(400).json({ success: false, message: 'Email already in use' });
    }

    // 2) Hash password
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    // 3) Create & save user
    const newUser = await User.create({ name, email, password: hash });
    // 4) Respond (omit password)
    const { password: _, ...userData } = newUser.toObject();
    res.json({ success: true, user: userData });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Register error' });
  }
};

// POST /users/login
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("Login attempt with email:", email);

    const user = await User.findOne({ email });
    if (!user) {
      console.log("User not found");
      return res.status(400).json({ success: false, message: 'Invalid credentials' });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      console.log("Password mismatch");
      return res.status(400).json({ success: false, message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    const { password: _, ...userData } = user.toObject();
    console.log("Login successful for user:", userData);
    res.json({ success: true, user: userData, token });
  } catch (err) {
    console.error("Login error occurred:", err);
    res.status(500).json({ success: false, message: 'Login error' });
  }
};


