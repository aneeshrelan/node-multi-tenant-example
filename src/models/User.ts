import { INTEGER, STRING } from "sequelize";
import { context } from "../context";

const User = () => {
  const store = context.getStore();

  const sequelize = store?.get("sequelize");
  return sequelize?.define(
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
};

export default User;
