const Film = require("../model/film");
const FilmService = require("../services/filmService");

class FilmController {
  static index = async (req, res, next) => {
    try {
      const data = await FilmService.get_all_movies(next);
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  };

  static show = async (req, res, next) => {
    const id = req.params.id;
    try {
      const data = await Film.getFilmById(id, next);

      if (!data) {
        next({ title: "notFound" });
      } else {
        res.status(200).json(data);
      }
    } catch (err) {
      next(err);
    }
  };

  static create = async (req, res, next) => {
    const filmData = req.body;

    try {
      const data = await Film.createFilm(filmData, next);
      res.status(201).json(data);
    } catch (err) {
      next(err);
    }
  };

  static update = async (req, res, next) => {
    const id = req.params.id;
    const filmData = req.body;
    try {
      const data = await Film.update(id, filmData, next);

      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  };

  static delete = async (req, res, next) => {
    const id = req.params.id;
    try {
      const data = await Film.delete(id, next);
      res.status(200).json({ message: "Movies Delete " });
    } catch (err) {
      next(err);
    }
  };
}

module.exports = FilmController;
