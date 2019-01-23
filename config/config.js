const dotenv = require("dotenv");

dotenv.config();

const devUsername = process.env.DEV_DB_USERNAME;
const devPassword = process.env.DEV_DB_PASSWORD;
const devDatabase = process.env.DEV_DB_NAME;
const testUsername = process.env.TEST_DB_USERNAME;
const testPassword = process.env.TEST_DB_PASSWORD;
const testDatabase = process.env.TEST_DB_NAME;
const productionUsername = process.env.PRODUCTION_USERNAME;
const productionPassword = process.env.PRODUCTION_PASSWORD;
const productionDatabase = process.env.PRODUCTION_DB_NAME;
const productionHost = process.env.PRODUCTION_HOST;

const config = {
  development: {
    username: devUsername,
    password: devPassword,
    database: devDatabase,
    host: "127.0.0.1",
    dialect: "postgres"
  },
  test: {
    username: testUsername,
    password: testPassword,
    database: testDatabase,
    host: "127.0.0.1",
    dialect: "postgres"
  },
  production: {
    username: productionUsername,
    password: productionPassword,
    database: productionDatabase,
    host: productionHost,
    dialect: "postgres"
  }
};

module.exports = config;
