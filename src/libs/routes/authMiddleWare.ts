import { IUserRead } from './../interface';
import Configuration from "../../config/Configuration";
import { NextFunction } from "express";
import * as jwt from "jsonwebtoken";
import hasPermission from "./hasPermission";
import { TRAINEEE } from "../constants";
import UserRepository from './../../repositories/user/UserRepository'

export default (moduleName, permissionType) => (
  req: IUserRead,
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
  const { id } = user;
  const getUserRepository:UserRepository = new UserRepository();

  getUserRepository.findOne({_id:id}).then(
    (data) => {
      console.log(data);
      req.users = data ;
      next();
      return next();
      //  if (hasPermission(moduleName, user.role, permissionType)) {
      //     console.log("Permission is allowed.");
      //   }else {
      //           next({
      //             status: "Bad Request",
      //             message: `${permissionType} Permission is not allowed.`
      //           });
      //         }}).catch(err=>{if(!user){
      //           next({status: "Bad Request",
      //           message: "User is not found"});
      //         }});
      //   next();
        })



// if(!user){
//   next({status: "Bad Request",
//   message: "User is not found"});
// }
// if (hasPermission(moduleName, user.role, permissionType)) {
//   console.log("Permission is allowed.");
// }
// next();
// })
//   // if (user) {
//   //   const role = user.role;
//   //   if (hasPermission(moduleName, role, permissionType)) {
//   //     console.log("Permission is allowed.");
//   //   } else {
//   //     next({
//   //       status: "Bad Request",
//   //       message: `${permissionType} Permission is not allowed.`
//   //     });
//   //   }
//   // }
//   // next();
      }
