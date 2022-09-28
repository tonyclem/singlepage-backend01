const express = require("express");
const router = express.Router();

const { SeedController } = require("../controllers/seedController");

router.route("/").get(SeedController);

module.exports = router;
