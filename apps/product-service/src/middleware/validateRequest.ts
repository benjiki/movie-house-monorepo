// apps/auth-service/src/middleware/validateRequest.ts
import { Request, Response, NextFunction } from "express";

import { ObjectSchema } from "joi";

export const validateRequest = (schema: ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body, { abortEarly: false });

    if (error) {
      const messages = error.details.map((detail) => detail.message);
      return res.status(400).json({
        message: "Validation error",
        errors: messages,
      });
    }

    next();
  };
};

export const validateParams = (schema: ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.params, { abortEarly: false });

    if (error) {
      const messages = error.details.map((details) => details.message);
      return res
        .status(400)
        .json({ message: "Param Validation Error", errors: messages });
    }
    next();
  };
};
