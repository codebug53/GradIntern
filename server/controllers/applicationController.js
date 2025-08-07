import Application from "../models/applicationModel.js";

export const applyJob = async (req, res) => {
  try {
    const application = new Application({
      ...req.body,
      applicantId: req.user.id,
    });
    await application.save();
    res.status(201).json(application);
  } catch (err) {
    res.status(500).json({ error: "Apply failed" });
  }
};

export const getApplications = async (req, res) => {
  const jobId = req.params.jobId;
  const apps = await Application.find({ jobId });
  res.json(apps);
};

export const updateApplication = async (req, res) => {
  const appId = req.params.id;
  const status = req.body.status;
  await Application.findByIdAndUpdate(appId, { status });
  res.json({ message: "Application updated" });
};
