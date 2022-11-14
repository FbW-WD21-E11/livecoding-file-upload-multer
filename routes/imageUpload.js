import express from "express";
import upload from "../config/multer.js";

import fs from "fs/promises";

const router = express.Router();

router.post("/singleImage", upload.single("image"), async (req, res) => {
  console.log(req.file); // file property is being added by multer
  console.log(req.body.username);
  console.log(req.body.birthday);
  res.send("Ok");

  await fs.unlink();
});

router.post("/multipleImages", upload.array("images", 3), (req, res) => {
  console.log(req.files);

  res.send("Ok");
});

export default router;
