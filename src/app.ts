import express from "express";

import { tasksRoutes } from "./Routes/tasksRoutes";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/tasks", tasksRoutes);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
