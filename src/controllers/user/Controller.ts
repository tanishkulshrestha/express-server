import { compareSync } from 'bcrypt';
import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import configuration from '../../config/Configuration';
import { IUserRead } from '../../libs/interface';
import successHandler from '../../libs/routes/successHandler';
import UserRepository from '../../repositories/user/UserRepository';
class UserController {
  public static getInstance() {
    if (!UserController.instance) {
      UserController.instance = new UserController();
    }
    return UserController.instance;
  }
  private static instance: UserController;
  public async get(req: IUserRead, res: Response, next: NextFunction) {
   try {
     const x = req.skipLimit.split(' ');
     const skip1 = Number(x[1]);
     const limit1 = Number(x[0]);
     const { skip = skip1 , limit = limit1 } = req.query;
     console.log('Skip is', skip1, 'Limit is: ', limit1);
     const role = {role: 'trainee'};
     const userRepository = new UserRepository();
     const data = { role, skip , limit };
     const user = await userRepository.read(data);
     res.status(200).send(await successHandler('Successfully fetch user', user ));
    }
   catch (e) {
     console.log('Inside Catch');
     next({ status: 'Bad Request', message: 'Error Occurred' });
   }
  }

  public async create(req: Request, res: Response, next: NextFunction) {
   try {
     const { name, id, email, role } = req.body;
     const data = { name, id, email, role };
     const userRepository = new UserRepository();
     userRepository.create(data);
     res
        .status(200)
        .send(await successHandler('Successfully Created Users', data));
      }
   catch (e) {
     console.log('Inside Catch');
     next({ status: 'Bad Request', message: 'Error Occurred' });
      }
  }

  public async update(req: Request, res: Response, next: NextFunction) {
    try {
     const { id, dataToUpdate } = req.body;
     const updateRepository = new UserRepository();
     updateRepository.update({ _id: id, dataToUpdate });
     res
        .status(200)
        .send(await successHandler('Successfully Updated Users', ''));
    }
    catch (e) {
      console.log('Inside Catch');
      next({ status: 'Bad Request', message: 'Error Occurred' });
       }
  }

  public async remove(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;
      const updateRepository = new UserRepository();
      const updatData = await updateRepository.delete({ _id: id });
      res
      .status(200)
      .send(await successHandler(`Successfully Deleted ${id} Users`, ''));
    }
    catch (e) {
      console.log('Catch inside controller ------- ');
      return  next({error: 'User does not exist' });
    }
  }

  public async login(req: Request, res: Response, next: NextFunction) {
    try {
      const {email, password } = req.body;
      const email1 = email;
      const loginrepository = new UserRepository();
      const data = await loginrepository.findOne({email: email1});
      const result = compareSync(password, data.password );
      if (!result) {
          next({ status: 'Bad Request', message: 'Password is invalid.' });
      }
      else {
          const token = jwt.sign({
          exp: Math.floor(Date.now() / 1000) + (15 * 60), name: data.name, role: data.role }, configuration.key);
          res
          .status(200)
          .send(await successHandler(`Successfully generated token`, `Token is : ${token}`));
      }
  }
    catch (e) {
      console.log('Inside Catch');
      next({ status: 'Bad Request', message: 'Error Occurred' });
     }
}
}
export default UserController.getInstance();
