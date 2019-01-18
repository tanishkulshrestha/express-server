import {
  GET_USERS,
  HEAD_TRAINER,
  TRAINEE,
  TRAINER,
  permissions
} from "../constants";
export default function hasPermission(moduleName, role, permissionType) {
  if (permissions[moduleName]) {
    if (
      permissions[moduleName][permissionType].includes(role) ||
      permissions[moduleName]["all"].includes(role)
    ) {
      console.log("This user has permission.");
    } else {
      console.log("This user has not permission.");
    }
  } else {
    console.log("This user has not permission.");
  }
}
