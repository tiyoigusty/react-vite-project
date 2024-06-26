import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function find(id: number) {
  try {
    return await prisma.thread.findMany({
      where: { userId: id },
      include: {
        user: {
          select: {
            id: true,
            fullName: true,
            username: true,
            photoProfile: true,
          },
        },
      },
    });
  } catch (error) {
    throw new String(error);
  }
}

export default { find };
