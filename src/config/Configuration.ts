import { IConfig } from "./IConfig";
import { config } from "dotenv";

config();

const Configuration: IConfig = Object.freeze({
  port: process.env.PORT
});

export default Configuration;
