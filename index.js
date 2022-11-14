import cors from "cors";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import imageUploadRoute from "./routes/imageUpload.js";

const app = express();
const port = 3001;
const clientUrl = `http://localhost:${port}`;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log(__dirname);

// prevent same origin security policy with CORS
app.use(cors());
app.use(express.json());

app.use("/upload", imageUploadRoute);

// serve
app.use("/images", express.static("./uploads/images"));

// Serve frontend client/build folder
app.use(express.static(path.join(__dirname, "client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

app.listen(port, () => {
  console.log(`The server 🙈 is listening on port ${port}`);
  console.log(`Visit ${clientUrl} in your browser`);
});
