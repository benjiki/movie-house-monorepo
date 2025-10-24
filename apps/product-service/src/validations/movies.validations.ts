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

export const movieCategoryUpdateBodySchema = Joi.object({
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

export const movieCreateVaidationSchema = Joi.object({
  movieName: Joi.string().trim().required().messages({
    "string.base": "Movie name must be a string.",
    "string.empty": "Movie name is required.",
    "any.required": "Movie name is required.",
  }),

  movieCategoryId: Joi.number().integer().required().messages({
    "number.base": "Movie Category ID must be a number.",
    "any.required": "Movie Category ID is required.",
  }),
}).unknown(false);

export const movieIdParamSchema = Joi.object({
  id: Joi.number().integer().required().messages({
    "any.required": "ID is required",
    "number.base": "ID must be a number",
  }),
}).unknown(false);

export const movieUpdateBodySchemaSchema = Joi.object({
  movieName: Joi.string().trim().required().messages({
    "string.base": "Movie name must be a string.",
    "string.empty": "Movie name is required.",
    "any.required": "Movie name is required.",
  }),

  movieCategoryId: Joi.number().integer().required().messages({
    "number.base": "Movie Category ID must be a number.",
    "any.required": "Movie Category ID is required.",
  }),
}).unknown(false);
