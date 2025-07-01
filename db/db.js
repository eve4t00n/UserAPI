const { Sequelize } = require("sequelize");

const dbConnection = new Sequelize({
  dialect: "sqlite",
  storage: "./storage.sqlite",
});

module.exports = dbConnection;
