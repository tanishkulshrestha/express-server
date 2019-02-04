import { NextFunction, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import Configuration from '../../config/Configuration';
import UserRepository from './../../repositories/user/UserRepository';
import { IUserRead } from './../interface';
import hasPermission from './hasPermission';

export default (moduleName, permissionType) => (
  req: IUserRead,
  res: Response,
  next: NextFunction,
) => {
  console.log('fgfh');
  console.log('Inside AuthMiddleware ', moduleName, permissionType);
  console.log(req.headers.authorization, '------');
  const token = req.headers.authorization;
  console.log('Token is :', token);
  const { key } = Configuration;
  console.log(Configuration);
  console.log('Key is :', key);
  const user = jwt.verify(token, key);
  console.log('User is:', user);
  const { id } = user;
  const getUserRepository = new UserRepository();

  getUserRepository.findOne({ _id: id }).then(
    (data) => {
      console.log(data);
      if (!user) {
        next({ status: 'Bad Request', message: 'User is not found' });
      }
      if (hasPermission(moduleName, data.role, permissionType)) {
        console.log('Permission is allowed.');
        req.users = data;
        next();
      } else {
        next({
          message: `${permissionType} Permission is not allowed.`, status: 'Bad Request'
        });
      }
    })
    .catch((err) => {
      next({ message: 'User is not found', status: 'Bad Request' });
    });
};
