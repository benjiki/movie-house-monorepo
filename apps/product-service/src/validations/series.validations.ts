import Joi from "joi";

export const seriesCategoryCreateVaidationSchema = Joi.object({
  seriesCategoryName: Joi.string().required().messages({
    "string.empty": "Series Category Name is required.",
    "any.required": "Series Category Name is required.",
  }),
  price: Joi.number().required().messages({
    "number.base": "Price must be a number.",
    "any.required": "Price is required.",
  }),
}).unknown(false);

export const seriesCategoryUpdateBodySchema = Joi.object({
  seriesCategoryName: Joi.string().required().messages({
    "string.empty": "Series Category Name is required.",
    "any.required": "Series Category Name is required.",
  }),
  price: Joi.number().required().messages({
    "number.base": "Price must be a number.",
    "any.required": "Price is required.",
  }),
}).unknown(false);

export const seriesCategoryIdParamSchema = Joi.object({
  id: Joi.number().integer().required().messages({
    "any.required": "ID is required",
    "number.base": "ID must be a number",
  }),
}).unknown(false);

export const seriesCreateVaidationSchema = Joi.object({
  seriesName: Joi.string().trim().required().messages({
    "string.base": "Series name must be a string.",
    "string.empty": "Series name is required.",
    "any.required": "Series name is required.",
  }),

  seriesCategoryId: Joi.number().integer().required().messages({
    "number.base": "Series Category ID must be a number.",
    "any.required": "Series Category ID is required.",
  }),

  seriesSeason: Joi.number().integer().required().messages({
    "number.base": "Series Season number must be a number.",
    "any.required": "Series Season number is required.",
  }),
  seriesEpisode: Joi.number().integer().required().messages({
    "number.base": "Series Season Episode must be a number.",
    "any.required": "Series Season Episode  is required.",
  }),
}).unknown(false);

export const seriesIdParamSchema = Joi.object({
  id: Joi.number().integer().required().messages({
    "any.required": "ID is required",
    "number.base": "ID must be a number",
  }),
}).unknown(false);

export const seriesUpdateBodySchemaSchema = Joi.object({
  seriesName: Joi.string().trim().required().messages({
    "string.base": "Series name must be a string.",
    "string.empty": "Series name is required.",
    "any.required": "Series name is required.",
  }),

  seriesCategoryId: Joi.number().integer().required().messages({
    "number.base": "Series Category ID must be a number.",
    "any.required": "Series Category ID is required.",
  }),

  seriesSeason: Joi.number().integer().required().messages({
    "number.base": "Series Season number must be a number.",
    "any.required": "Series Season number is required.",
  }),
  seriesEpisode: Joi.number().integer().required().messages({
    "number.base": "Series Season Episode must be a number.",
    "any.required": "Series Season Episode  is required.",
  }),
}).unknown(false);
