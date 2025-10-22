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
}).unknown(false);

export const movieCategoryUpdateVaidationSchema = Joi.object({
  id: Joi.number().required().messages({
    "number.base": "id must be a number.",
    "any.required": "id is required.",
  }),
  movieCategoryName: Joi.string().required().messages({
    "string.empty": "Movie Category Name is required.",
    "any.required": "Movie Category Name is required.",
  }),
  price: Joi.number().required().messages({
    "number.base": "Price must be a number.",
    "any.required": "Price is required.",
  }),
}).unknown(false);

// validation/movie.validation.ts
export const movieCategoryIdParamSchema = Joi.object({
  id: Joi.number().integer().required().messages({
    "any.required": "ID is required",
    "number.base": "ID must be a number",
  }),
}).unknown(false);
