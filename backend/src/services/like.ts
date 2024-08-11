import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function find(id: number) {
  try {
    return await prisma.like.findMany();
  } catch (error) {
    throw new String(error);
  }
}

export default { find };
