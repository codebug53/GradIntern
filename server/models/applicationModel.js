import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
  jobId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Job",
    required: true
  },
  applicantId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  status: {
    type: String,
    default: "Pending"
  },
  resumeUrl: {
    type: String,
    required: true
  }
}, { timestamps: true });

export default mongoose.model("Application", applicationSchema);
