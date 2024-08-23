import Router from "express";

import { getTasks } from "../controllers/tasksController";

export const tasksRoutes = Router();

tasksRoutes.get("/", getTasks);

export default tasksRoutes;
