import { z } from "zod";

// const MAX_FILE_SIZE = 500000;
// const ACCEPTED_IMAGE_TYPES = [
//   "image/jpeg",
//   "image/jpg",
//   "image/png",
//   "image/webp",
// ];

export const createThreadSchema = z.object({
  content: z.string().min(1).max(300),
  image: z
    .any()
    // .refine((files) => files?.lenght == 1, "image is required")
    // .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, "max file size is 5MB")
    // .refine((files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type), ".jpeg, .jpg, .png and .webp files are accepted")
});
