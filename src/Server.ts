import * as express from "express";
import * as bodyParser from "body-parser";
import { notFoundRoutes, errorHandler, successHandler } from "./libs/routes";
import router from "./router";
import Database from "./libs/Database";
export class Server {
  private app: express.Express;
  constructor(private config) {
    this.app = express();
    console.log("Inside the constructor");
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
    console.log("Inside setup");
    const { app, config } = this;
    app.use("/health-check", (req: express.Request, res: express.Response) => {
      res.send("I am Ok");
    });
    app.use("/api", router);
    app.use(notFoundRoutes);
    app.use(errorHandler);
  }
  public run() {
    const {
      app,
      config: { port, MongoUri }
    } = this;
    Database.open(MongoUri).then(() => {
      app.listen(
        port,
        err => {
          if (err) throw err;
        },
        console.log(`App is running on ${port}`)
      );
    });
  }
}
