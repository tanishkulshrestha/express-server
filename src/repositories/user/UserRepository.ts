import * as mongoose from 'mongoose';
import VersionableRepository from '../versionable/VersionableRepository';
import IUserModel from './IUserModel';
import { userModel } from './UserModel';
export default class UserRepository extends VersionableRepository <IUserModel , mongoose.Model<IUserModel> > {
  private model: mongoose.Model<IUserModel>;
  constructor() {
    super();
  }
  // public count(): mongoose.Promise<number> {
  //   return this.model.countDocuments({});
  // }
  // public findOne(query): mongoose.Promise<IUserModel> {
  //   return this.model.findOne(query);

  // }
  public create(data: any): Promise<IUserModel> {
    console.log('----------Inside Create---------', data);
    return this.genericCreate(data, false);
    // return this.model.create({
    //   ...data,
    //   _id: UserRepository.generateObjectId(),
    // });
  }

  public delete(data: any): any {
    console.log('----------Inside Delete------', data);
    this.model.deleteOne(data, (err) => {
      if (err) { console.log('Error', err); }
      else {console.log('Delete'); }
    });
  }
  public update(data: any) {
    console.log('----------Inside Update------');
    console.log(data, ': data');
    return this.genericUpdate(data);
    // this.model.updateOne(fromdata, todata, (err) => {
    //   if (err) { console.log('Error', err); }
    //   else { console.log('Update'); }
    // });
  }
  public read(data: any) {
    console.log('----------Inside Read------', data);
    return this.model.find(data);
  }
}
