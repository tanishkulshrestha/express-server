import * as bodyParser from 'body-parser';
import * as express from 'express';
import Database from './libs/Database';
import { errorHandler, notFoundRoutes , successHandler } from './libs/routes';
import router from './router';

export class Server {
  private app: express.Express;
  constructor(private config) {
    this.app = express();
    console.log('Inside the constructor');
  }
  public bootstrap() {
    this.initBodyParser();
    this.setupRoutes();
    return this;
  }
  public initBodyParser() {
    const { app } = this;

    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
  }
  public setupRoutes() {
    console.log('Inside setup');
    const { app, config } = this;
    app.use('/health-check', (req: express.Request, res: express.Response) => {
      res.send('I am Ok');
    });
    app.use('/api', router);
    app.use(notFoundRoutes);
    app.use(errorHandler);
  }
  public run() {
    const {
      app,
      config: { port, mongoUri },
    } = this;
    Database.open(mongoUri).then(() => {
      app.listen(
        port,
        // (err: any) => {
        //   if (err) {  throw(err); }
        // },
      );
      console.log(`App is running on ${port}`);
    }).catch(() => {console.log('Error in connection'); });
  }
}
