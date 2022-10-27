import Task from "../models/Task";
import User from "../models/User";


export const getTasks = async () => {

  const users = await Task().findAll({
    include: { model: User(), as: "userData", attributes: ["email"] },
    attributes: ["task"],
  });


  return users;
};


