import { Request, Response } from "express";


import { getTasks } from "./helpers/tasks";

export const getAllTasks = async (req: Request, res: Response) => {
  const tasks = await getTasks()
  return res.send({ tasks });
};

