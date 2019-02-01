import { Request, Response, NextFunction } from "express";
import successHandler from "../../libs/routes/successHandler";
import UserRepository  from "../../repositories/user/UserRepository"
class UserController {
  private static instance: UserController;
  public static getInstance() {
    if (!UserController.instance) {
      UserController.instance = new UserController();
    }
    return UserController.instance;
  }

  get(req: Request, res: Response) {
    console.log(req.body.user);
    // const repository= new UserRepository();
    // console.log("Get method");
    // console.log("----------------->>>>",req.query.id);
    // repository.read({_id:req.query.id})
    // .then((data) => {
    //   console.log(data);
    //   res.status(200).send(successHandler("Successfully fetch user", data));
    // })
    // .catch((err) => { throw err }  );
    //   console.log("Successfully fetch user");
  }

  create(req: Request, res: Response, next: NextFunction) {
    const { name, id } = req.body;
    const data = [{ name, id }];
    if (!id) {
      next({ status: "Bad Request", message: "ID is Not Present" });
    } else if (!name) {
      next({ status: "Bad Request", message: "Name is Not Present" });
    } else
      res
        .status(200)
        .send(successHandler("Successfully Created Users", data));
  }
  update(req: Request, res: Response, next: NextFunction) {
    const { name, id } = req.body;
    const data = [{ name, id }];
    if (!id) {
      next({ status: "Bad Request", message: "ID is Required" });
    } else
      res
        .status(200)
        .send(successHandler("Successfully Updated Users", data));
  }
  remove(req: Request, res: Response) {
    const id = req.params.id;
    res
      .status(200)
      .send(successHandler(`Successfully Deleted ${id} Users`, ""));
  }
}
export default UserController.getInstance();
