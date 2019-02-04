import * as mongoose from 'mongoose';
import IVersionableModel from './IVersionableModel';
export default class VersionableSchema extends mongoose.Schema {
  constructor(baseSchema: any, options: any) {
    const versionable = Object.assign({
      createdAt : {
        default : Date,
        required : true,
        },
      deletedAt : {
        required : false,
        type : Boolean,
      },
     originalId : {
       required : true,
       type : String,
      },
    }, options);
    super(versionable, options);
  }

}
