const express = require("express");
const router = express.Router();
const filmRouter = require("./film");

router.use("/movies", filmRouter);

module.exports = router;
