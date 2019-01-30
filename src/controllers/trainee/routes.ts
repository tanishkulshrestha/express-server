import { config } from "dotenv";
import trainee from "./Controller";
import * as express from "express";
import validationHandler from "../../libs/routes/validationHandler";
import validation from "./validation";
import authMiddleWare from "../../libs/routes/authMiddleWare";
import { TRAINEEE } from "../../libs/constants";

const traineeRoute: express.Router = express.Router();
console.log("Inside routes.ts");
traineeRoute.get("/", authMiddleWare(TRAINEEE, "write"), trainee.get);
// traineeRoute.get("/", validationHandler(validation.get), trainee.get);
traineeRoute.post("/", validationHandler(validation.create), trainee.create);
traineeRoute.put("/", validationHandler(validation.update), trainee.update);
traineeRoute.delete(
  "/:id",
  validationHandler(validation.delete),
  trainee.remove
);
export default traineeRoute;
