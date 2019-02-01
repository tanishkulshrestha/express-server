import { Request, Response, NextFunction } from "express";
import successHandler from "../../libs/routes/successHandler";
class UserController {
  private static instance: UserController;
  public static getInstance() {
    if (!UserController.instance) {
      UserController.instance = new UserController();
    }
    return UserController.instance;
  }

  get(req: Request, res: Response) {
    console.log("Get method");
    const data = [
      {
        name: "user1"
      },
      {
        name: "user2"
      }
    ];
    console.log(data);
    if (!req.query.id) {
      res.status(200).send(successHandler("Successfully fetch Users", data));
      console.log("Successfully fetch Users");
    } else {
      const id = JSON.parse(req.query.id) - 1;
      console.log(id);
      res
        .status(200)
        .send(successHandler("Successfully fetch User", data[id]));
      console.log("Successfully fetch 1 User");
    }
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
