import * as mongoose from "mongoose";
import IUserModel from "./IUserModel";

export default class UserSchema extends mongoose.Schema {
  constructor(options: any) {
    const baseSchema = {
      _id: String,
      name: String,
      email: String
    };
    super(baseSchema, options);
  }
}
