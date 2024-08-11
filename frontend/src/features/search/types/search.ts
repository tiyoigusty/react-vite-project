import { UserEntity } from "../../home/entities/user";

export type UserSearch = Pick<UserEntity, "id" | "photoProfile" | "fullName" | "username" | "bio"> & {isFollowed: true}