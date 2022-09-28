console.log("Starting");

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send(" hello world");
});

const port = 8080;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});