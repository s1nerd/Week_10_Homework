const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "film",
  password: "ngodingasik123",
  port: 5432,
});

module.exports = pool;
