import { NextFunction , Request, Response } from 'express';
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
 public get(req: Request, res: Response) {
    console.log(req.body.users);
    // const repository= new UserRepository();
    console.log('Get method');
    // console.log("----------------->>>>",req.query.id);
    // repository.read({_id:req.query.id})
    // .then((data) => {
    //   console.log(data);
    //   res.status(200).send(successHandler("Successfully fetch user", data));
    // })
    // .catch((err) => { throw err }  );
    //   console.log("Successfully fetch user");
    res.status(200).send(successHandler('Successfully fetch user', req.body.users ));
  }

  public create(req: Request, res: Response, next: NextFunction) {
    const { name, id } = req.body;
    const data = [{ name, id }];
    if (!id) {
      next({ status: 'Bad Request', message: 'ID is Not Present' });
    } else if (!name) {
      next({ status: 'Bad Request', message: 'Name is Not Present' });
    } else {
      res
        .status(200)
        .send(successHandler('Successfully Created Users', data));
  }}
public update(req: Request, res: Response, next: NextFunction) {
  const { name1, id1, role1 } = req.query;
  console.log(req.query);
  const updateRepository = new UserRepository();
  updateRepository.update({ _id: id1 }, { name: name1, role: role1  });
  console.log(req.body);
  if (!id1) {
      next({ status: 'Bad Request', message: 'ID is Required' });
    } else {
      res
        .status(200)
        .send(successHandler('Successfully Updated Users', ''));
  }}
  public remove(req: Request, res: Response) {
    const id = req.params.id;
    res
      .status(200)
      .send(successHandler(`Successfully Deleted ${id} Users`, ''));
  }
}
export default UserController.getInstance();
