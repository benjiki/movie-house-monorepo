import Joi from "joi";

export const registerValidationSchema = Joi.object({
  phoneNumber: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .required()
    .messages({
      "string.pattern.base": "Phone number must be exactly 10 digits.",
      "string.empty": "Phone number is required.",
      "any.required": "Phone number is required.",
    }),
  role: Joi.string().valid("Customer", "Admin").optional(),
  password: Joi.string().min(6).required(),
}).unknown(false);

export const loginValidationSchema = Joi.object({
  phoneNumber: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .required()
    .messages({
      "string.pattern.base": "Phone number must be exactly 10 digits.",
      "string.empty": "Phone number is required.",
      "any.required": "Phone number is required.",
    }),
  password: Joi.string().min(6).required(),
}).unknown(false);
