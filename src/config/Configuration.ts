import { config } from 'dotenv';
import { IConfig } from './IConfig';

config();

const Configuration: IConfig = Object.freeze({
  key: process.env.key,
  mongoUri: process.env.MONGO_URL,
  password1: process.env.PASSWORD1,
  port: process.env.PORT,
});

export default Configuration;
