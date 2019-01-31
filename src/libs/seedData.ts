import * as mongoose from "mongoose";
import UserRepository from "../repositories/user/UserRepository";
import { rejects } from "assert";

function seed() {
  console.log("--------------");

  const repository = new UserRepository().create({ id: "4", name: "abc" });
}

export default seed;
