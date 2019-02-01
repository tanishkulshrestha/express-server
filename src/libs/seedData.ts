import * as mongoose from "mongoose";
import UserRepository from "../repositories/user/UserRepository";

function seed() {
  console.log("............");

  const repository = new UserRepository();
  // repository.create({ id: "4", name: "abc" });
  // repository.delete({ name: "xyz" });
  // repository.update({ name: "xyz" });
  // repository.read({});
}

export default seed;
