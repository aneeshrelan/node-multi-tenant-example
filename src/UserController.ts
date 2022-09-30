import { Request, Response } from "express";
import TaskModel from "./models/Task";
import UserModel from "./models/User";

export const getAllUsers = async (req: Request, res: Response) => {
  const Task = TaskModel();
  const User = UserModel();
  const users = await User.findAll({
    include: { model: Task, as: "taskData" },
  });

  return res.send(users);
};
