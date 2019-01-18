const GET_USERS = "getUsers";
const HEAD_TRAINER = "head-trainer";
const TRAINEE = "trainee";
const TRAINER = "trainer";

const permissions = {
  GET_USERS: {
    all: [HEAD_TRAINER],
    read: [TRAINEE, TRAINER],
    write: [TRAINER],
    delete: []
  }
};

function hasPermission(moduleName, role, permissionType) {
  if (permissions[moduleName]) {
    if (
      permissions[moduleName][permissionType].includes(role) ||
      permissions[moduleName]["all"].includes(role)
    ) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

console.log(hasPermission("GET_USERS", "trainee", "write"));
