import { NextFunction, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import Configuration from '../../config/Configuration';
import UserRepository from './../../repositories/user/UserRepository';
import { IUserRead } from './../interface';
import hasPermission from './hasPermission';

export default (moduleName, permissionType) => async (
  req: IUserRead,
  res: Response,
  next: NextFunction,
) => {
  const token = req.headers.authorization;
  console.log('Token is :', token);
  const { key } = Configuration;
  console.log(Configuration);
  console.log('Key is :', key);
  const user = jwt.verify(token, key);
  console.log('User is:', user);
  const { id } = user;
  const getUserRepository = new UserRepository();

  const data = await getUserRepository.findOne({ _id: id });
  if (!data) {
    throw ({ error: 'Error Occurred in findOne', status });
  }
  console.log('Data is:', data, 'Data Role:', data.role);
  if (!user) {
    next({ status: 'Bad Request', message: 'User is not found' });
  }
  if (hasPermission(moduleName, data.role, permissionType)) {
    console.log('Permission is allowed.');
    req.users = data;
    next();
  }
  else {
    next({
      message: `${permissionType} Permission is not allowed.`, status: 'Bad Request',
    });
  }
};
