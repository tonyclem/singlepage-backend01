const express = require("express");
const router = express.Router();

const { getAllProducts } = require("../controllers/ProductController");

router.route("/").get(getAllProducts);

module.exports = router;
