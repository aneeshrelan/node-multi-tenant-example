import { NextFunction, Request, Response } from "express";

import { setKeyInStore, contextInIt } from "../context";
// import { getTenantRedisClient } from "../config/redis";
import { getTenantSequelizeClient } from "../config/sequelize";
import { loadAssociation } from "../models/User";

export const apiTenantContextHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  await contextInIt(async () => {
    const tenant = req.headers["tenant-id"] as string;
    setKeyInStore("tenant-id", tenant);

    if (!tenant) {
      return res.send(401);
    }
    const sequelize = await getTenantSequelizeClient(tenant);
    setKeyInStore("sequelize", sequelize);
    loadAssociation()

    // const redis = getTenantRedisClient(tenant);
    // setKeyInStore("redis", redis);

    return next();
  });
};
