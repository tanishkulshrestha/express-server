import * as mongoose from "mongoose";
import IUserModel from "./IUserModel";
import { userModel } from "./UserModel";

export default class UserRepository {
  private model: mongoose.Model<IUserModel>;

  public static generateObjectId() {
    return String(mongoose.Types.ObjectId());
  }
  constructor() {
    this.model = userModel;
  }
  public create(data: any): Promise<IUserModel> {
    console.log("----------14---------", data);
    return this.model.create({
      ...data,
      _id: UserRepository.generateObjectId()
    });
  }
}
