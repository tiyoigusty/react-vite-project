import { RedisClientType } from "@redis/client";
import { createClient } from "redis";

export let redisClient: RedisClientType<any, any, any>

export async function initializeRedisClient() {
    redisClient = await createClient({
        url: `redis://${process.env.REDIS_URL}`
    })
    .on("error", (err) => {
        throw new Error("Redis Client Error!")
    })
    .connect()

    console.log("REDIS CONNECTED!");
    
}