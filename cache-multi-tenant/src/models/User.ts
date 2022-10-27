import { INTEGER, Sequelize, STRING } from "sequelize";
import { getValueFromStore } from "../context";
import Task, { defineTask } from "./Task";


export const defineUser = () => {
  const sequelize = getValueFromStore<Sequelize>("sequelize");

  sequelize?.define(
    "User",
    {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      email: {
        type: STRING,
      },
    },
    { timestamps: false }
  );


}
const User = () => {
  const sequelize = getValueFromStore<Sequelize>("sequelize");
  return sequelize.models.User
};



export default User

export const loadAssociation = () => {
  defineUser()
  defineTask()
  User().hasMany(Task(), {
    foreignKey: "userId",
    sourceKey: "id",
    as: "taskData",
  });

  Task().belongsTo(User(), {
    foreignKey: "userId",
    targetKey: "id",
    as: "userData",
  });
}