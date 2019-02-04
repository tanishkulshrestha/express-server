import * as mongoose from 'mongoose';
import IUserModel from './IUserModel';
import { userModel } from './UserModel';
export default class UserRepository {
  public static generateObjectId() {
    return String(mongoose.Types.ObjectId());
  }
  private model: mongoose.Model<IUserModel>;
  constructor() {
    this.model = userModel;
  }
  public count(): mongoose.Promise<number> {
    return this.model.countDocuments({});
  }
  public findOne(query): mongoose.Promise<IUserModel> {
    return this.model.findOne(query);

  }
  public create(data: any): Promise<IUserModel> {
    console.log('----------Inside Create---------', data);
    return this.model.create({
      ...data,
      _id: UserRepository.generateObjectId(),
    });
  }

  public delete(data: any): any {
    console.log('----------Inside Delete------', data);
    this.model.deleteOne(data, (err) => {
      if (err) { console.log('Error', err); }
      else {console.log('Delete'); }
    });
  }
  public update(fromdata: any, todata: any ) {
    console.log('----------Inside Update------');
    this.model.updateOne(fromdata, todata, (err) => {
      if (err) { console.log('Error', err); }
      else { console.log('Update'); }
    });
  }
  public read(data: any) {
    console.log('----------Inside Read------', data);
    return this.model.find(data);
  }
}
