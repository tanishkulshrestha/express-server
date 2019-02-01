import { config } from "dotenv";
import user from "./Controller";
import * as express from "express";
import validationHandler from "../../libs/routes/validationHandler";
// import validation from "./validation";
import authMiddleWare from "../../libs/routes/authMiddleWare";
import { TRAINEEE } from "../../libs/constants";

const userRoute: express.Router = express.Router();
console.log("Inside routes.ts");
userRoute.get( "/" , authMiddleWare(TRAINEEE, "read") /*, validationHandler(validation.get) */, user.get );
userRoute.post( "/" , authMiddleWare(TRAINEEE, "write") /*, validationHandler(validation.create) */, user.create );
userRoute.put( "/" , authMiddleWare(TRAINEEE, "update") /*, validationHandler(validation.update) */, user.update );
userRoute.delete( "/:id" , authMiddleWare(TRAINEEE, "delete")/* , validationHandler(validation.delete)*/ , user.remove );
export default userRoute;
