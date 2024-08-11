import { UserEntity } from "./user";

export type ThreadEntity = {
  id: number;
  content: string;
  image?: string;
  user: UserEntity;
  _count: {likes: number, replies: number}
  time: string;
  createdAt: Date;
  updatedAt: Date;
};
