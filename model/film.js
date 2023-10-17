const pool = require("../config/config");

class Film {
  static getMovies = async (next) => {
    const findQuery = "SELECT * FROM movies";

    try {
      const data = await pool.query(findQuery);

      return data.rows;
    } catch (err) {
      next(err);
    }
  };

  static getFilmById = async (id, next) => {
    const query = "SELECT * FROM movies WHERE id = $1;";
    try {
      const data = await pool.query(query, [id]);

      if (data.rows.length === 0) {
        return nul;
      }

      return data.rows[0];
    } catch (err) {
      next(err);
    }
  };

  static createFilm = async (filmData, next) => {
    const { title, genres, year, photo } = filmData;

    if (!title || !genres || !year || !photo) {
      return next({
        name: "paramsError",
      });
    }

    const query =
      "INSERT INTO movies (title, genres, year, photo) VALUES ($1, $2, $3, $4) ;";

    try {
      const data = await pool.query(query, [title, genres, year, photo]);

      return data.rows[0];
    } catch {
      next(err);
    }
  };

  static update = async (id, filmData, next) => {
    const { title, genres, year, photo } = filmData;

    if (!title || !genres || !year || !photo) {
      return next({
        name: "paramsError",
      });
    }

    const query =
      "UPDATE movies SET title = $1, genres = $2, year = $3, photo = $4 WHERE id = $5";

    try {
      const data = await pool.query(query, [title, genres, year, photo, id]);
      return data.rows[0];
    } catch {}
  };

  static delete = async (id, next) => {
    const query = "DELETE FROM movies WHERE id = $1";

    try {
      const data = await pool.query(query, [id]);
      return data.rows[0];
    } catch (err) {
      next(err);
    }
  };
}

module.exports = Film;
