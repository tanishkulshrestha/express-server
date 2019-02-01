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
    console.log("----------Inside Create---------", data);
    return this.model.create({
      ...data,
      _id: UserRepository.generateObjectId()
    });
  }

  public delete(data: any): any {
    console.log("----------Inside Delete------", data);
    this.model.deleteOne(data, err => {
      if (err) console.log("Error", err);
      else console.log("Delete");
    });
  }
  public update(data: any) {
    console.log("----------Inside Update------", data);
    this.model.updateOne(data, err => {
      if (err) console.log("Error", err);
      else console.log("Update");
    });
  }
  public read(data: any) {
    console.log("----------Inside Read------", data);
    this.model
      .find({})
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log("Error");
      });
    return console.log(data);
  }
}