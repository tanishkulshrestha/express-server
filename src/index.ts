import config from './config/Configuration';
import { Server } from './Server';

const server = new Server(config);
server.bootstrap().run();
