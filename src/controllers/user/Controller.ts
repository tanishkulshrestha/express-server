import { Request, Response, NextFunction } from "express";
import successHandler from "../../libs/routes/successHandler";
class TraineeController {
  private static instance: TraineeController;
  public static getInstance() {
    if (!TraineeController.instance) {
      TraineeController.instance = new TraineeController();
    }
    return TraineeController.instance;
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
      console.log("Successfully fetch trainees");
    } else {
      const id = JSON.parse(req.query.id) - 1;
      console.log(id);
      res
        .status(200)
        .send(successHandler("Successfully fetch trainees", data[id]));
      console.log("Successfully fetch 1 trainee");
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
        .send(successHandler("Successfully Created Trainee", data));
  }
  update(req: Request, res: Response, next: NextFunction) {
    const { name, id } = req.body;
    const data = [{ name, id }];
    if (!id) {
      next({ status: "Bad Request", message: "ID is Required" });
    } else
      res
        .status(200)
        .send(successHandler("Successfully Updated Trainee", data));
  }
  remove(req: Request, res: Response) {
    const id = req.params.id;
    res
      .status(200)
      .send(successHandler(`Successfully Deleted ${id} Trainee`, ""));
  }
}
export default TraineeController.getInstance();
