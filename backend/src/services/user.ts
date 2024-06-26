import { PrismaClient } from "@prisma/client";
import { UpdatedUserDTO } from "../dto/user-dto";

const prisma = new PrismaClient();

async function find(search: string) {
  try {
    return await prisma.user.findMany({
      where: {fullName: {contains: search, mode: "insensitive"}}
    });
  } catch (error) {
    throw new String(error);
  }
}

async function findOne(id: number) {
  try {
    const thread = await prisma.user.findFirst({
      where: { id },
    });

    if (!thread) throw new String("THREAD NOT FOUND!!");
    return thread;
  } catch (error) {
    throw new String(error);
  }
}

async function update(id: number, dto: UpdatedUserDTO) {
  try {
    const user = await prisma.user.findFirst({
      where: { id: id },
    });

    if (dto.background) {
      user.background = dto.background;
    }
    if (dto.photoProfile) {
      user.photoProfile = dto.photoProfile;
    }
    if (dto.fullName) {
      user.fullName = dto.fullName;
    }
    if (dto.username) {
      user.username = dto.username;
    }
    if (dto.bio) {
      user.bio = dto.bio;
    }

    return await prisma.user.update({
      where: { id: id },
      data: { ...user },
    });
  } catch (error) {
    throw new String(error);
  }
}

export default { find, findOne, update };
