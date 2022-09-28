const { StatusCodes } = require("http-status-codes");
const data = require("../data");
const Product = require("../models/product");

const SeedController = async (req, res) => {
  await Product.deleteMany({});
  const createdProduct = await Product.insertMany(data.products);
  res.status(StatusCodes.OK).json({ createdProduct });
};

module.exports = { SeedController };
