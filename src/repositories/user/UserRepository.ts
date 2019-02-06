import * as mongoose from 'mongoose';
import VersionableRepository from '../versionable/VersionableRepository';
import IUserModel from './IUserModel';
export default class UserRepository extends VersionableRepository<IUserModel, mongoose.Model<IUserModel>> {
  private model: mongoose.Model<IUserModel>;
  constructor() {
    super();
  }
  public create(data: any): Promise<IUserModel> {
    console.log('----------Inside Create---------', data);
    return this.genericCreate(data, false);
  }

  public delete(data: any): any {
    console.log('----------Inside Delete------', data);
    return this.genericDelete(data);
  }
  public update(data: any) {
    console.log('----------Inside Update------');
    console.log(data, ': data');
    return this.genericUpdate(data);
  }
  public read(data: any) {
    console.log('----------Inside Read------', data);
    return this.model.find(data);
  }
}
