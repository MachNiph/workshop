const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("workshop_db", "postgres", "redshirtfull456", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = sequelize;
