import * as express from "express";

export class Server {
  private app: express.Express;
  constructor(private config) {
    this.app = express();
    console.log("Inside the constructor");
  }
  public bootstrap() {
    this.setupRoutes();
    return this;
  }
  public setupRoutes() {
    console.log("Inside setup");
    const { app } = this;
    app.use("/health-check", (req, res) => {
      res.send("I am Ok");
    });
  }
  public run() {
    const {
      app,
      config: { port }
    } = this;
    app.listen(
      port,
      err => {
        if (err) throw err;
      },
      console.log(`App is running on ${port}`)
    );
  }
}
