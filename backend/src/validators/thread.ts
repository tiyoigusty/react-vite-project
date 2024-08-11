import joi from "joi";

export const createThreadSchema = joi.object({
  content: joi.string().min(1).required(),
  image: joi.string().allow(null, "")
});
