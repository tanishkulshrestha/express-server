import * as mongoose from 'mongoose';
export default class VersionableSchema extends mongoose.Schema {
  constructor(options: any, collection: any) {
    const versionable = Object.assign({
      createdAt: {
        default: Date.now,
        required: true,
        type: Date,
      },
      deletedAt: {
        type: Date,
      },
      originalId: {
        required: false,
        type: String,
      },
    }, options);
    super(versionable, collection);
  }
}
