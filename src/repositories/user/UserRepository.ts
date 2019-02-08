import * as mongoose from 'mongoose';
import VersionableRepository from '../versionable/VersionableRepository';
import IUserModel from './IUserModel';
import { userModel } from './UserModel';
export default class UserRepository extends VersionableRepository<IUserModel, mongoose.Model<IUserModel>> {
  constructor() {
    super(userModel);
  }
  public async create(data: any): Promise<IUserModel> {
    console.log('----------Inside Create---------', data);
    return await this.genericCreate(data, false);
  }

  public async delete(data: any): Promise<IUserModel> {
    console.log('----------Inside Delete------', data);
    return await this.genericDelete(data);
  }
  public async update(data: any): Promise<IUserModel> {
    console.log('----------Inside Update------');
    const temp = await this.genericUpdate(data);
    if (!temp) { throw ({ error: 'Error Occurred in count', status }); }
    return temp;
  }
  public async read(data: any): Promise<IUserModel> {
    console.log('----------Inside Read------');
    const { role } = data;
    const a = await this.list(role, undefined, { skip: Number(data.skip), limit: Number(data.limit) });
    return a;
  }
}
