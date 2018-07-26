import dotenv from 'dotenv';
import { Client } from 'pg';
import configuration from '../config/config';
import queries from './livedata';

dotenv.config();

let config;

if (process.env.NODE_ENV === 'development' || 'test') {
  config = configuration.development;
} else { config = process.env.DATABASE_URL; }

const client = new Client(config);

client.connect();
client.query(queries, (error) => {
  if (error) {
    console.log('error', error.message);
  }

  client.end();
});

export default client;