const Sequelize = require("sequelize");
const databaseURL =
  process.env.DATABASE_URL ||
  "postgres://postgres:secret@localhost:5432/postgres";
const db = new Sequelize(databaseURL);

db.sync().then(() => console.log("Database is being updated"));

module.exports = db;
