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
}

module.exports = Film;
