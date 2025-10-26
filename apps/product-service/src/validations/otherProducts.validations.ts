import Joi from "joi";

export const otherproductCategoryCreateVaidationSchema = Joi.object({
  otherProductCategoryName: Joi.string().required().messages({
    "string.empty": "Product Category Name is required.",
    "any.required": "Product Category Name is required.",
  }),
}).unknown(false);

export const otherproductCategoryUpdateBodySchema = Joi.object({
  otherProductCategoryName: Joi.string().required().messages({
    "string.empty": "Product Category Name is required.",
    "any.required": "Product Category Name is required.",
  }),
}).unknown(false);

// validation/otherproduct.validation.ts
export const otherproductCategoryIdParamSchema = Joi.object({
  id: Joi.number().integer().required().messages({
    "any.required": "ID is required",
    "number.base": "ID must be a number",
  }),
}).unknown(false);

export const otherproductCreateVaidationSchema = Joi.object({
  productName: Joi.string().trim().required().messages({
    "string.base": "Product name must be a string.",
    "string.empty": "Product name is required.",
    "any.required": "Product name is required.",
  }),
  otherProductType: Joi.string()
    .valid(
      "BRAND_NEW",
      "REFURBISHED",
      "SLIGHTLY_USED",
      "USED",
      "HEAVILY_USED",
      "FOR_PARTS"
    )
    .optional()
    .messages({
      "any.only":
        "Other Product Type must be one of this  BRAND_NEW, REFURBISHED, SLIGHTLY_USED, USED, HEAVILY_USED, FOR_PARTS.",
      "string.base": "Other Product Type must be a string.",
    }),

  otherProductCategoryId: Joi.number().integer().required().messages({
    "number.base": "Product Category ID must be a number.",
    "any.required": "Product Category ID is required.",
  }),
  price: Joi.number().required().messages({
    "number.base": "Price must be a number.",
    "any.required": "Price is required.",
  }),
}).unknown(false);

export const otherproductIdParamSchema = Joi.object({
  id: Joi.number().integer().required().messages({
    "any.required": "ID is required",
    "number.base": "ID must be a number",
  }),
}).unknown(false);

export const otherproductUpdateBodySchema = Joi.object({
  productName: Joi.string().trim().required().messages({
    "string.base": "Product name must be a string.",
    "string.empty": "Product name is required.",
    "any.required": "Product name is required.",
  }),
  otherProductType: Joi.string()
    .valid(
      "BRAND_NEW",
      "REFURBISHED",
      "SLIGHTLY_USED",
      "USED",
      "HEAVILY_USED",
      "FOR_PARTS"
    )
    .optional()
    .messages({
      "any.only":
        "Other Product Type must be one of this  BRAND_NEW, REFURBISHED, SLIGHTLY_USED, USED, HEAVILY_USED, FOR_PARTS.",
      "string.base": "Other Product Type must be a string.",
    }),

  otherProductCategoryId: Joi.number().integer().required().messages({
    "number.base": "Product Category ID must be a number.",
    "any.required": "Product Category ID is required.",
  }),
  price: Joi.number().required().messages({
    "number.base": "Price must be a number.",
    "any.required": "Price is required.",
  }),
}).unknown(false);
