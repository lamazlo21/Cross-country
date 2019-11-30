const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  port: process.env.PORT,
  dbPort: process.env.DB_PORT,
  dbPass: process.env.DB_PASS,
  dbUser: process.env.DB_USER,
  dbHost: process.env.DB_HOST,
};