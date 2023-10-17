const Film = require("../model/film");

class FilmRepository {
  static all = async (next) => {
    try {
      const data = await Film.getMovies(next);
      return data;
    } catch (err) {
      next(err);
    }
  };
}

module.exports = FilmRepository;
