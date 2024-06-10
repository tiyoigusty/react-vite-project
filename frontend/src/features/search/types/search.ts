import { UserEntity } from "../../home/entities/user";

export type UserSearch = Pick<UserEntity, "photoProfile" | "fullName" | "username" | "bio"> & {isFollowed: true}