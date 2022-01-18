const { Pool } = require("pg");
const isProduction = process.env.NODE_ENV === "production";
const database = process.env.DB_DATABASE;
const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${database}`;

const pool = new Pool({
  connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
  ssl: isProduction ? { rejectUnauthorized: false } : false,
});

module.exports = {
  pool,
  query: (text, params, callback) => pool.query(text, params, callback),
};
