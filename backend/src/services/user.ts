import { PrismaClient } from "@prisma/client";
import { UpdatedUserDTO } from "../dto/user-dto";
import { v2 as cloudinary } from "cloudinary";

const prisma = new PrismaClient();

async function find(search: string) {
  try {
    return await prisma.user.findMany({
      where: { fullName: { contains: search, mode: "insensitive" } },
    });
  } catch (error) {
    throw new String(error);
  }
}

async function findOne(id: number) {
  try {
    const user = await prisma.user.findFirst({
      where: { id },
      include: { _count: { select: { followeds: true, followers: true } } },
    });
    console.log(user);

    if (!user) throw new String("THREAD NOT FOUND!!");
    return user;
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

    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });

    let backgroundURL;
    if (dto.background) {
      const uploadBackground = await cloudinary.uploader.upload(
        dto.background,
        {
          upload_preset: "circle",
        }
      );
      backgroundURL = uploadBackground.secure_url;
    }

    let photoProfileURL;
    if (dto.photoProfile) {
      const uploadPhotoProfile = await cloudinary.uploader.upload(
        dto.photoProfile,
        {
          upload_preset: "circle",
        }
      );
      photoProfileURL = uploadPhotoProfile.secure_url;
    }

    return await prisma.user.update({
      where: { id: id },
      data: {
        ...user,
        background: backgroundURL,
        photoProfile: photoProfileURL,
      },
    });
  } catch (error) {
    throw new String(error);
  }
}

export default { find, findOne, update };
