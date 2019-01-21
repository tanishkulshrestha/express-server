import { IUsers} from './../interfaces';
import { validateEmail } from "./helpers";

export default function validateUsers(users:IUsers[]): void {
  let validUsers: IUsers[] = [] ;
  let invalidUsers: IUsers[] = [];
  users.forEach(function(user) {
    let { traineeEmail, reviewerEmail } = user;
    if (validateEmail(traineeEmail) && validateEmail(reviewerEmail)) {
      console.log("True",user);
      validUsers.push(user);

    } else {
      console.log("False",user);
      invalidUsers.push(user);
    }
  });
  console.log(
    "These are Valid Users: ",
    validUsers,
    "and the counts are",
    validUsers.length
  );
  console.log(
    "These are Invalid Users: ",
    invalidUsers,
    "and the counts are",
    invalidUsers.length
  );
}
