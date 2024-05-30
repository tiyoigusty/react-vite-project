import { PrismaClient } from "@prisma/client";
import { CreateThreadDTO, UpdatedThreadDTO } from "../dto/thread-dto";
import { createThreadSchema } from "../validators/thread";
import { v2 as cloudinary } from "cloudinary";

const prisma = new PrismaClient();

async function find() {
  try {
    return await prisma.thread.findMany();
  } catch (error) {
    return error;
  }
}

async function findOne(id: number) {
  try {
    const thread = await prisma.thread.findFirst({
      where: { id },
    });

    if (!thread) return null;
    return thread;
  } catch (error) {
    return error;
  }
}

async function create(dto: CreateThreadDTO) {
  // validation with joi
  const validate = createThreadSchema.validate(dto);
  if (validate.error) {
    return validate.error.message;
  }

  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

  const upload = await cloudinary.uploader.upload(dto.image, {
    upload_preset:"circle",
  });

  try {
    return await prisma.thread.create({
      data: { ...dto, image: upload.secure_url },
    });
  } catch (error) {
    return error;
  }
}

async function update(id: number, dto: UpdatedThreadDTO) {
  try {
    const thread = await prisma.thread.findFirst({
      where: { id: Number(id) },
    });

    if (dto.content) {
      thread.content = dto.content;
    }
    if (dto.image) {
      thread.image = dto.image;
    }

    return await prisma.thread.update({
      where: { id: Number(id) },
      data: { ...thread },
    });
  } catch (error) {
    return error;
  }
}

async function remove(id: number) {
  try {
    return await prisma.thread.delete({
      where: { id: Number(id) },
    });
  } catch (error) {
    return error;
  }
}

export default { find, findOne, create, update, remove };
