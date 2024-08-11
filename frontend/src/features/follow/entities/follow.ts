import { UserEntity } from "../../home/entities/user";

export type FollowingEntity = {
  id: number;
  followedId: number;
  followerId: number;
  createdAt: Date;
  updateAt: Date;
  follower: UserEntity;
};

export type FollowerEntity = {
  id: number;
  followedId: number;
  followerId: number;
  createdAt: Date;
  updateAt: Date;
  followed: UserEntity;
  isFollow: boolean
};
