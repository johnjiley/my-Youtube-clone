import mongoose from "mongoose";

const videoFileSchema = new mongoose.Schema(
  {
    videoTitle: {
      type: String,
      required: true,
    },
    fileName: {
      type: String,
      required: true,
    },
    filePath: {
      type: String,
      required: true,
    },
    fileType: {
      type: String,
      required: true,
    },
    fileSize: {
      type: String,
      required: true,
    },
    videoChanel: {
      type: String,
      required: true,
    },
    Like: {
      type: Number,
      default: 0,
    },
    Views: {
      type: Number,
      default: 0,
    },
    Uploder: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const VideoFiles = mongoose.models.VideoFiles || mongoose.model('VideoFiles', videoFileSchema);

export default VideoFiles;
