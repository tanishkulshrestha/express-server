import { IUsers } from "./interfaces";
import { diamond, triangle } from "./patterns";
import { hasPermission, validateUsers } from "./utils";
diamond(3);
triangle(3);
hasPermission("MODIFY_USERS", "trainer", "write");
hasPermission("VIEW_USERS", "trainee", "write");
const users: IUsers[] = [
  {
    traineeEmail: "trainee1@successive.tech",
    reviewerEmail: "reviewer1@successive.tech"
  },

  {
    traineeEmail: "trainee2@succsive.tech",
    reviewerEmail: "reviewer2@succesive.tech"
  }
];
validateUsers(users);
