const { createServer } = require("node:http");
const express = require("express");
const cors = require("cors");
const fs = require("fs");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const app = express();
const port = 3000;

app.use(cors());

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.post("/upload-file", upload.single("image"), function (req, res) {
  if (req.file === "undefined" || req === null) {
    console.log("error: got file " + req.file);
  } else {
    res.send("Received uploaded file");

    // Path to the binary file and output JPG file
    const binaryFilePath = req.file.path;
    const outputJpgFilePath = "./output.jpg";

    const buffer = fs.readFileSync(binaryFilePath);
    if (buffer !== null) {
      fs.writeFileSync(outputJpgFilePath, buffer);
      console.log("image written successfully");

      // TODO: 1. use output.jpg to detect face landmarks? (face-api.js?)
      //      2. pick hex for 4 points on face (use pretrained ml model?)
      //      3. chat gpt color season based on hex codes
    }
  }

  console.log("done processing");
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
