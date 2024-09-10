import videoFiles from "../Models/videoFiles.js";

export const uploadVideo = async (req, res, next) => {
  if (!req.file) {
    return res.status(404).json({ message: "Please upload a '.mp4' video file only." });
  }

  try {
    const file = new videoFiles({
      videoTitle: req.body.title,
      fileName: req.file.originalname,
      filePath: req.file.path,
      fileType: req.file.mimetype,
      fileSize: req.file.size,
      videoChanel: req.body.channel,  // Ensure this matches the client-side field
      Uploader: req.body.Uploader,    // Correcting typo
    });

    await file.save();
    return res.status(200).json({ message: "File uploaded successfully", file });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const getAllvideos = async (req, res) => {
  try {
    const files = await videoFiles.find();
    res.status(200).json(files);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
