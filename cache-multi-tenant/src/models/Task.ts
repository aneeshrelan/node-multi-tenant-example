import { INTEGER, Sequelize, STRING } from "sequelize";
import { getValueFromStore } from "../context";


export const defineTask = () => {
  const sequelize = getValueFromStore<Sequelize>("sequelize");
  sequelize.define(
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

}

const Task = () => {
  const sequelize = getValueFromStore<Sequelize>("sequelize");
  return sequelize.models.Task
};

export default Task;
