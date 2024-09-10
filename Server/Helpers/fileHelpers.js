"use strict";
import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Make sure 'uploads/' folder exists
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const filefilter=(req,file,cb)=>{
    if(file.mimetype === "video/mp4"){
        cb(null,true);
    }else{
        cb(null,false);
    }
}

const upload = multer({storage:storage,fileFilter:filefilter});

export default upload