import express from "express";
import {
  applyJob,
  getApplications,
  updateApplication,
} from "../controllers/applicationController.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const router = express.Router();

router.post("/", verifyToken, applyJob);
router.get("/:jobId", verifyToken, getApplications);
router.put("/:id", verifyToken, updateApplication);

export default router;
