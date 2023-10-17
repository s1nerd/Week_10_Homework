const express = require("express");
const router = express.Router();
const FilmController = require("../controller/filmController");

router.get("/", FilmController.index);
router.get("/:id", FilmController.show);
router.post("/", FilmController.create);
router.put("/:id", FilmController.update);
router.delete("/:id", FilmController.delete);

module.exports = router;
