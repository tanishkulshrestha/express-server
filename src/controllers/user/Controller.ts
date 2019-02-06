import { NextFunction, Request, Response } from 'express';
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
  public get(req: IUserRead, res: Response) {
    console.log(req.users);
    console.log('Get method');
    res.status(200).send(successHandler('Successfully fetch user', req.users));
  }

  public create(req: Request, res: Response, next: NextFunction) {
    const { name, id, email, role } = req.body;
    const data = { name, id, email, role };
    if (!id) {
      next({ status: 'Bad Request', message: 'ID is Not Present' });
    } else if (!name) {
      next({ status: 'Bad Request', message: 'Name is Not Present' });
    } else if (!email) {
      next({ status: 'Bad Request', message: 'Email is Not Present' });
    } else if (!role) {
      next({ status: 'Bad Request', message: 'Role is Not Present' });
    } else {
      const userRepository = new UserRepository();
      userRepository.create(data);
      res
        .status(200)
        .send(successHandler('Successfully Created Users', data));
    }
  }
  public update(req: Request, res: Response, next: NextFunction) {
    const { id, dataToUpdate } = req.body;
    const { name } = dataToUpdate;
    console.log(id);
    console.log(name);
    if (!id) {
      next({ status: 'Bad Request', message: 'ID is Required' });
    } else {
      const updateRepository = new UserRepository();
      updateRepository.update({ _id: id, name });
      res
        .status(200)
        .send(successHandler('Successfully Updated Users', ''));
    }
  }
  public remove(req: Request, res: Response) {
    const id = req.params.id;
    const updateRepository = new UserRepository();
    updateRepository.delete({ _id: id });
    res
      .status(200)
      .send(successHandler(`Successfully Deleted ${id} Users`, ''));
  }
}
export default UserController.getInstance();
