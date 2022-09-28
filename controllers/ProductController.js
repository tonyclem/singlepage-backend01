const { StatusCodes } = require("http-status-codes");
const Product = require("../models/product");

const getAllProducts = async (req, res) => {
  const product = await Product.find();
  res
    .status(StatusCodes.OK)
    .json({ msg: "successfully get all product", product });
};

module.exports = { getAllProducts };
