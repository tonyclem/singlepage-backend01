require("dotenv").config();

const express = require("express");

// connect to Database
const connectDataBase = require("./database/connect");

const app = express();

app.get("/", (req, res) => {
  res.send(" hello world");
});

const port = 8080;

const startServer = async () => {
  try {
    await connectDataBase(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server running on port ${port}....`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
