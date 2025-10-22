import Joi from "joi";

export const movieCategoryCreateVaidationSchema = Joi.object({
  movieCategoryName: Joi.string().required().messages({
    "string.empty": "Movie Category Name is required.",
    "any.required": "Movie Category Name is required.",
  }),
  price: Joi.number().required().messages({
    "number.base": "Price must be a number.",
    "any.required": "Price is required.",
  }),
});

export const movieCategoryUpdateVaidationSchema = Joi.object({
  id: Joi.number().required(),
  movieCategoryName: Joi.string().required().messages({
    "string.empty": "Movie Category Name is required.",
    "any.required": "Movie Category Name is required.",
  }),
  price: Joi.number().required().messages({
    "number.base": "Price must be a number.",
    "any.required": "Price is required.",
  }),
});
