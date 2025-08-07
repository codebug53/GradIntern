import Job from "../models/jobModel.js";

export const postJob = async (req, res) => {
  try {
    const job = new Job({ ...req.body, recruiterId: req.user.id });
    await job.save();
    res.status(201).json(job);
  } catch (err) {
    res.status(500).json({ error: "Failed to post job" });
  }
};

export const getRecruiterJobs = async (req, res) => {
  try {
    const jobs = await Job.find({ recruiterId: req.user.id });
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch jobs" });
  }
};
