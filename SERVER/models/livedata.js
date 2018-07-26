import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

dotenv.config();

const hashedPassword = bcrypt.hashSync(process.env.PLAIN_PASS, 10);

const users = `
DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  fullname VARCHAR(60) NOT NULL,
  username VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  password VARCHAR(50) NOT NULL);
INSERT INTO users(fullname,username,email,password)
VALUES ('SOlomon Odewale','seunmeme','seunmeme@gmail.com','${hashedPassword}');`;


const entries = `
DROP TABLE IF EXISTS diaryEntries CASCADE;
CREATE TABLE diaryEntries(
  id SERIAL PRIMARY KEY,
  title VARCHAR(80) NOT NULL,
  content VARCHAR(255) NOT NULL,
  createdAt TIMESTAMPTZ NOT NULL DEFAULT NOW());
INSERT INTO diaryEntries(
  title,
  content)
VALUES ('My first entry', 'This is the content of my first entry'),
       ('My Second entry', 'This is the content of my second entry'),
       ('My third entry', 'This is the content of my third entry');`;


const queries = `${users}${entries}`;

export default queries;
