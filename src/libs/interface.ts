import { Request } from 'express';
export interface IPermission {
  traineee: {
    read: string[];
    write: string[];
    delete: string[];
    update: string[];
  };
}
export interface IUserRead extends Request {
  users: any;
  skipLimit: any;
}
