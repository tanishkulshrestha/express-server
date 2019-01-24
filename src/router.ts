import { Router, Request, Response } from "express";
import { traineeRoutes } from "./controllers/trainee";
const router: Router = Router();

router.use("/trainee", traineeRoutes);

router.use("/user", (req: Request, res: Response) => {
  console.log("User");
  res.send("user");
});
export default router;
