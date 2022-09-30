import { INTEGER, Sequelize, STRING } from "sequelize";
import { context } from "../context";

const Task = () => {
  const store = context.getStore();

  const sequelize = store?.get("sequelize") as Sequelize;
  const table = sequelize?.define(
    "Task",
    {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      userId: {
        type: INTEGER,
      },
      task: {
        type: STRING,
      },
    },
    { timestamps: false }
  );

  return table;
};

export default Task;
