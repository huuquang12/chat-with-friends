import { Redis } from "@upstash/redis";

export const db = Redis.fromEnv()(async () => {
  try {
    const data = await db.get("key");
    console.log(data);
  } catch (error) {
    console.error(error);
  }
})();
