import config from "./config/Configuration";
import { Server } from "./Server";

console.log("Inside Config", config);
const server = new Server(config);
server.bootstrap().run();
