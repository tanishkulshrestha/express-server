import trainee from "./Controller";
import * as express from "express";

const traineeRoute: express.Router = express.Router();

traineeRoute.get("/", trainee.get);
traineeRoute.post("/", trainee.create);
traineeRoute.put("/", trainee.update);
traineeRoute.delete("/", trainee.remove);
export default traineeRoute;
