import { IPermission } from "./../interfaces";
import {
  GET_USERS,
  HEAD_TRAINER,
  TRAINEE,
  TRAINER,
  permissions
} from "../constants";

export default function hasPermission(
  moduleName: string,
  role: string,
  permissionType: string
) {
  if (permissions[moduleName]) {
    if (
      permissions[moduleName][permissionType]||
      permissions[moduleName].all[role]
    ) {
      console.log("This user has permission.");
    } else {
      console.log("This user has not permission.");
    }
  } else {
    console.log("This user has not permission.");
  }
}
