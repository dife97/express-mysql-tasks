import express from "express";

import { tasksRouter } from "./routes/tasksRoutes"

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/tasks", tasksRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
