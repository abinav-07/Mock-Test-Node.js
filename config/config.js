const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  development: {
    "username": process.env.MY_SQL_USERNAME,
    "password": process.env.MY_SQL_PASSWORD,
    "database": process.env.MY_SQL_DB_NAME,
    "host": process.env.MY_SQL_HOST,
    "dialect": "mysql",
    "define": {
      timeStamps: false
    },
    logging: process.env.NODE_ENV === "development",//logs sequelize executions 
  }

}