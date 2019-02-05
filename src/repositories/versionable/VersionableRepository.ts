import * as mongoose from 'mongoose';
import { userModel } from './../user/UserModel';

export default class VersionableRepository<D extends mongoose.Document, M extends mongoose.Model<D>> {
  public static generateObjectId() {
    return String(mongoose.Types.ObjectId());
  }
  private modelType: M;
  constructor() {
    this.modelType = userModel;
  }
  public count(): mongoose.Promise<number> {
    return this.modelType.countDocuments({});
  }
  public findOne(query): mongoose.Promise<D> {
    return this.modelType.findOne(query).lean();

  }
  public genericCreate(data: any, flag: any) {
    const id = VersionableRepository.generateObjectId();
    if (!flag) { return this.modelType.create(
      {
      ...data, _id: id, originalId: id,

    }); }
    return this.modelType.create(
      {
      ...data, _id: id,

    });
  }

  public genericUpdate(data: any) {
    console.log('------------??????????????', data._id);

    console.log('Inside req query', {originalId: data._id});

    this.findOne({originalId: data._id}).then( (result, error) => {
      delete result._id;
      this.genericCreate(Object.assign(result, {name: data.name}), true);
    });
    return this.modelType.updateOne({ _id: data._id }, { $set: { deletedAt: true } }, { upsert : true }).then(
      (err) => console.log(err),
    );
  }}
