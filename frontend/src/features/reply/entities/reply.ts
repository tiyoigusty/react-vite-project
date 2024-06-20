import { UserEntity } from "../../home/entities/user";

export type ReplyEntity = {
  id: number;
  content: string;
  image: string;
  user: UserEntity;
  createdAt: Date;
  updatedAt: Date;
};
