const FilmRepository = require("../repositories/filmRepository");

class FilmService {
  static get_all_movies = async (next) => {
    try {
      const data = FilmRepository.all(next);
      return data;
    } catch {
      next(err);
    }
  };
}

module.exports = FilmService;
