import { RedisClientType } from "@redis/client";
import { createClient } from "redis";

export let redisClient: RedisClientType<any, any, any>

export async function initializeRedisClient() {
    redisClient = await createClient({
        url: `${process.env.REDIS_URL}`
    })
    .on("error", (Error) => {
        throw new Error("Redis Client Error!")
    })
    .connect()

    console.log("REDIS CONNECTED!");
    
}