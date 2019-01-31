import { IConfig } from "./IConfig";
import { config } from "dotenv";

config();

const Configuration: IConfig = Object.freeze({
  port: process.env.PORT,
  key: process.env.key,
  MongoUri: process.env.MONGO_URL
});

export default Configuration;
