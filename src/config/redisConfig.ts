import { Redis } from "ioredis";

import serverConfig from "./serverConfig";

const redisConfig = {
  port: serverConfig.REDIS_PORT as number,
  host: serverConfig.REDIS_HOST,
  maxRetriesPerRequest: null,
};

const redisConnection = new Redis(redisConfig);

export default redisConnection;
