import Configuration from "../../config/Configuration";
import { NextFunction } from "express";
import * as jwt from "jsonwebtoken";
import hasPermission from "./hasPermission";
import { TRAINEEE } from "../constants";
export default (moduleName, permissionType) => (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("Inside AuthMiddleware ", moduleName, permissionType);

  const token = req.headers["authorization"];
  console.log("Token is :", token);
  const { key } = Configuration;
  console.log(Configuration);
  console.log("Key is :", key);
  const user = jwt.verify(token, key);
  console.log("User is:", user);
  if (user) {
    const role = user.role;
    if (hasPermission(moduleName, role, permissionType)) {
      console.log("Permission is allowed.");
    } else {
      next({
        status: "Bad Request",
        message: `${permissionType} Permission is not allowed.`
      });
    }
  }
  next();
};
