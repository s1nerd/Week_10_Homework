const Film = require("../model/film");

class FilmController {
  static index = async (req, res, next) => {
    try {
      const data = await Film.getMovies(next);
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  };
}

module.exports = FilmController;
