import * as mongoose from 'mongoose';
import VersionableSchema from '../versionable/VersionableSchema';
import IUserModel from './IUserModel';

export default class UserSchema extends VersionableSchema {
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
