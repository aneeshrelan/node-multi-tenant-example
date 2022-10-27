import Task from "../models/Task";
import User from "../models/User";

export const getUsers = async () => {

  const users = await User().findAll({
    include: { model: Task(), as: "taskData", attributes: ["task"] },
    attributes: ["email"],
  });


  return users;
};

