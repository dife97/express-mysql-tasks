import Router from "express";

export const tasksRouter = Router();

tasksRouter.get("/", (req, res) => {
  res.send("OK ha");
});

export default tasksRouter;
