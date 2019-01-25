import { Request, Response, NextFunction } from "express";
import { successHandler } from "../trainee";
class TraineeController {
  private static instance: TraineeController;
  public static getInstance() {
    if (!TraineeController.instance) {
      TraineeController.instance = new TraineeController();
    }
    return TraineeController.instance;
  }

  get(req: Request, res: Response) {
    const data = [
      {
        name: "trainee1"
      },
      {
        name: "trainee2"
      }
    ];
    res.status(200).send(successHandler("Successfully fetch trainees", data));
    console.log("Successfully get Trainees");
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
    } else if (!name) {
      next({ status: "Bad Request", message: "Name is Required" });
    } else
      res
        .status(200)
        .send(successHandler("Successfully Updated Trainee", data));
  }
  remove(req: Request, res: Response) {
    const id = req.params.id;
    console.log(req.params.id);
    console.log(id);
    // res.json({ message: `Contact ${id} deleted.` });
    res
      .status(200)
      .send(successHandler(`Successfully Deleted ${id} Trainee`, ""));
  }
}
export default TraineeController.getInstance();
