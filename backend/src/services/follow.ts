import { PrismaClient } from "@prisma/client";
import { UserJWTPayload } from "../../types/user";

const prisma = new PrismaClient();

async function find(user: UserJWTPayload, search: string) {
  try {
    const users = await prisma.user.findMany();

    const follows = await prisma.follow.findMany({
      where: { follower: { id: user.id } },
    });

    return users.map((user) => {
      return follows.map((follow) => {
        if (user.id === follow.followedId) return { ...user, isFollowed: true };
        return { ...user, isFollowed: false };
      })[0];
    });
  } catch (error) {
    throw new Error(error);
  }
}

async function findFollowing(user: UserJWTPayload) {
  try {
    const following = await prisma.follow.findMany({
      where: {
        followedId: user.id,
      },
      include: { follower: true },
    });
    return following;
  } catch (error) {
    throw new Error(error);
  }
}

async function findFollower(user: UserJWTPayload) {
  try {
    const follower = await prisma.follow.findMany({
      where: {
        followerId: user.id,
      },
      include: { followed: true },
    });
    return follower;
  } catch (error) {
    throw new Error(error);
  }
}

async function following(followerId: number, followedId: number) {
  try {
    const followData = { followerId, followedId };
    const newFollow = await prisma.follow.create({
      data: followData,
    });
    return newFollow;
  } catch (error) {
    throw new Error(error);
  }
}

async function unFollowing(followerId: number, followedId: number) {
  try {
    const deletedFollow = await prisma.follow.delete({
      where: {followedId_followerId: {
        followedId, followerId
      }}
    });
    return deletedFollow;
  } catch (error) {
    throw new Error(error);
  }
}

async function isFollowing(followerId: number, followedId: number) {
  try {
    const follow = await prisma.follow.findUnique({
      where: {
        followedId_followerId: {
          followedId,
          followerId,
        },
      },
    });
    return !!follow;
  } catch (error) {
    throw new Error(error);
  }
}

export default {
  find,
  findFollowing,
  findFollower,
  following,
  unFollowing,
  isFollowing,
};
