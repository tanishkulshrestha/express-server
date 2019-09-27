import * as mongoose from 'mongoose';

export default class VersionableRepository<D extends mongoose.Document, M extends mongoose.Model<D>> {
  public static generateObjectId() {
    return String(mongoose.Types.ObjectId());
  }
  private modelType: M;
  constructor(model) {
    this.modelType = model;
  }

  public async list(query, projection, options): Promise<D> {
    const count = await this.count();
    return this.modelType.find(query, projection, options);
  }
  public async count(): mongoose.Query<number> {
    const temp = await this.modelType.countDocuments().lean();
    if (!temp) { throw ({ error: 'Error Occurred in count', status }); }
    return temp;
  }
  public async findOne(query): Promise<D> {
    try {
      const temp = await this.modelType.findOne(query).lean();
      return temp;
    }
    catch (e) {
      throw (e);
    }
  }

  public async genericCreate(data: any, flag: any): Promise<D> {
    try {
      const id = VersionableRepository.generateObjectId();
      if (!flag) {
        const result1 = await this.modelType.create(
          {
            ...data, _id: id, originalId: id,

          });
        return result1;
      } else {
        const result = await this.modelType.create(
          {
            ...data, _id: id,

          });
        return result;
      }
    }
    catch (e) {
      throw (e);
    }
  }

  public async genericUpdate(data: any): Promise<D> {
    try {
      const { dataToUpdate } = data;
      const result = await this.findOne({ originalId: data._id, deletedAt: { $exists: false } });
      const newId = result._id;
      delete result._id;
      const newObj = Object.assign(result, dataToUpdate);
      const temp = await this.genericCreate(newObj, true);
      const result1 = await this.modelType.updateOne({ _id: newId, deletedAt: { $exists: false } },
        { deletedAt: Date.now() });
      return result1;
    }
    catch (e) {
      throw (e);
    }
  }

  public async genericDelete(data: any): Promise<D> {
    try {
      const result = await this.modelType.updateOne({ _id: data._id, deletedAt: { $exists: false } },
        { deletedAt: Date.now() });
      if (result.nModified === 0) {
        console.log('Already Deleted');
        throw ({ error: `undefined data` });
      }
      else {
        return result;
      }
    }
    catch (e) {
      console.log('inside catch ------------------------');
      throw ({ error: `undefined data` });
    }
  }
}
