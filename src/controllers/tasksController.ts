import { Request, Response } from "express";

function getTasks(req: Request, res: Response) {
  res.json({
    taskId: 123,
    title: "Any Title",
    content: "Do something",
    status: "done",
  });
}

export {
  getTasks,
}