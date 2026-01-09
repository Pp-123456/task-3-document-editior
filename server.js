const express = require("express");
const app = express();

app.use(express.json());

let documentText = "";

app.post("/save", (req, res) => {
  documentText = req.body.text;
  res.send("Document Saved");
});

app.get("/load", (req, res) => {
  res.send(documentText);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});