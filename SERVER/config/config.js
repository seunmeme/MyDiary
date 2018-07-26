import dotenv from 'dotenv';

dotenv.config();

export default {
  development: {
    database: process.env.DATABASE_URL,
  },
  production: {
    database: process.env.DATABASE_URL,
  },
};
