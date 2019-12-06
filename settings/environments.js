import dotenv from 'dotenv';
dotenv.config();
module.exports = {
  port: process.env.PORT,
  db: {
      port: process.env.DB_PORT,
      pass: process.env.DB_PASS,
      user: process.env.DB_USER,
      host: process.env.DB_HOST,
      limit: process.env.DB_LIMIT,
  }
};