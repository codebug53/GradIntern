import express from "express";
import { postJob, getRecruiterJobs } from "../controllers/jobController.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const router = express.Router();

router.post("/", verifyToken, postJob);
router.get("/", verifyToken, getRecruiterJobs);

export default router;
