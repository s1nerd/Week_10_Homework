const express = require("express");
const router = express.Router();
const FilmController = require("../controller/filmController");

router.get("/", FilmController.index);
// router.get("/:id", FilmController.index)
// router.post("/", FilmController.index)
// router.put("/", FilmController.index)
// router.delete("/:id", FilmController.index)

module.exports = router;
