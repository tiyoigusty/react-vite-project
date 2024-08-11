import { PrismaClient } from "@prisma/client";
import { CreateThreadDTO, UpdatedThreadDTO } from "../dto/thread-dto";
import { createThreadSchema } from "../validators/thread";
import { v2 as cloudinary } from "cloudinary";

const prisma = new PrismaClient();

async function find(id: number) {
  try {
    return await prisma.reply.findMany({
      where: {threadId: id},
      include: {
        user: {
          select: {
            id: true,
            fullName: true,
            username: true,
            photoProfile: true,
          }
        }
      }
    });
  } catch (error) {
    throw new String(error);
  }
}

async function findOne(id: number) {
    try {
      const reply = await prisma.reply.findFirst({
        where: { id },
      });
  
      if (!reply) throw new String("THREAD NOT FOUND!!");
      return reply;
    } catch (error) {
      throw new String(error);
    }
  }

  async function create(dto: CreateThreadDTO, userId: number, id: number) {
    try {
      // validation with joi
      const validate = createThreadSchema.validate(dto);
      if (validate.error) {
        throw new String(validate.error.message);
      }
  
      cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
      });
  
      if(dto.image) {
        const upload = await cloudinary.uploader.upload(dto.image, {
          upload_preset: "circle",
        });
      }
  
      return await prisma.reply.create({
        data: { ...dto, userId, threadId:id },
      });
    } catch (error) {
      throw new String(error);
    }
  }
  
  async function update(id: number, dto: UpdatedThreadDTO) {
    try {
      const reply = await prisma.reply.findFirst({
        where: { id: Number(id) },
      });
  
      if (dto.content) {
        reply.content = dto.content;
      }
      if (dto.image) {
        reply.image = dto.image;
      }
  
      return await prisma.reply.update({
        where: { id: Number(id) },
        data: { ...reply },
      });
    } catch (error) {
      throw new String(error);
    }
  }
  
  async function remove(id: number) {
    try {
      return await prisma.reply.delete({
        where: { id: Number(id) },
      });
    } catch (error) {
      throw new String(error);
    }
  }

export default { find, findOne, create, update, remove };