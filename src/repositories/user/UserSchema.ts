import * as mongoose from 'mongoose';
import IUserModel from './IUserModel';

export default class UserSchema extends mongoose.Schema {
  constructor(options: any) {
    const baseSchema = {
      _id: String,
      email: String,
      name: String,
      role: String,
    };
    super(baseSchema, options);
  }
}
