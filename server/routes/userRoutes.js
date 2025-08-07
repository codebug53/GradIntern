import express from "express";
import multer from "multer";
import { storage } from "../utils/cloudinary.js";
import { verifyToken } from "../middlewares/verifyToken.js";
import { uploadResume, getUserProfile } from "../controllers/userController.js";
import { registerUser, loginUser } from '../controllers/userController.js';

const upload = multer({ storage });

const router = express.Router();

// Fetch user profile
router.get("/profile", verifyToken, getUserProfile);

// Upload resume file to Cloudinary
router.put("/resume", verifyToken, upload.single("resume"), uploadResume);


// Public routes
router.post('/register', registerUser);
router.post('/login',    loginUser);

export default router;

