const { createServer } = require('node:http');
const express = require("express");
const cors = require("cors");
const multer = require('multer');
const upload = multer({ dest: 'uploads/' })

const app = express();
const port = 3000;

app.use(cors());

app.get("/", function (req, res) {
    res.send("Hello World!");
});

app.post("/upload-file", upload.single('image'), function (req, res) {
    console.log(req.file)
    console.log(req.body)
    res.send('Received uploaded file')
});

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});