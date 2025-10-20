import express, { Router } from "express";
import * as authController from "../controllers/auth.controller";
import { validateRequest } from "../middleware/validateRequest";
import { registerValidationSchema } from "../validations/auth.validations";

const router: Router = express.Router();

router.post(
  "/register",
  validateRequest(registerValidationSchema),
  authController.registerUser
);

export default router;
