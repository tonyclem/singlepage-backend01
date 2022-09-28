require("dotenv").config();

const express = require("express");

// security
const cors = require("cors");
const xss = require("xss-clean");
const mongoSanitize = require("express-mongo-sanitize");
const helmet = require("helmet");

// connect to Database
const connectDataBase = require("./database/connect");

// Route
const productRouter = require("./routes/productRoutes");
const seedRouter = require("./routes/seedRoutes");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Product Api</h1>");
});

// Security Settings
app.use(cors());
app.use(xss());
app.use(mongoSanitize());
app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/products", productRouter);
app.use("/api/v1/seed", seedRouter);

const port = process.env.PORT || 8080;

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
