import * as mongoose from "mongoose";

export default interface IUserModel extends mongoose.document {
  id: string;
  name: string;
  email: string;
}
