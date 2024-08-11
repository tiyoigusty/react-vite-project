export type UserEntity = {
  id: number;
  username: string;
  fullName: string;
  email: string;
  photoProfile: string;
  bio: string;
  background: string;
  _count: {followed: number, followers: number}
  createdAt: Date;
  updatedAt: Date;
};
