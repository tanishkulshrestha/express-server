import { IPermission } from "../interface";
import {
  TRAINEEE,
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
  console.log(permissions, moduleName);
  if (permissions[moduleName]) {
    if (permissions[moduleName][permissionType].includes(role)) {
      console.log("This user has permission.");
      return true;
    } else {
      console.log("This user has not permission.");
      return false;
    }
  } else {
    console.log("This user has not permission.");
    return false;
  }
}
