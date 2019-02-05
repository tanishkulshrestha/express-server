import * as mongoose from 'mongoose';
import IVersionableModel from './IVersionableModel';
export default class VersionableSchema extends mongoose.Schema {
  constructor(options: any, collection: any) {
    const versionable = Object.assign({
      createdAt: {
        default: Date.now,
        required: true,
        type: Date,
      },
      deletedAt: {
        required: false,
        type: Boolean,
      },
      originalId: {
        required: false,
        type: String,
      },
    }, options);
    super(versionable, collection);
  }

}
