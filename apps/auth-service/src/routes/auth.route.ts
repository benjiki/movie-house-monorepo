// apps/auth-service/src/routes/auth.route.ts
import express, { Router } from "express";
import passport from "passport";

import { authorizeRoles } from "../middleware/authorizeRoles";
import { validateRequest } from "../middleware/validateRequest";

import * as authController from "../controllers/auth.controller";
import { registerValidationSchema } from "../validations/auth.validations";

const router: Router = express.Router();

router.post(
  "/register",
  validateRequest(registerValidationSchema),
  authController.registerUser
);

router.get(
  "/admin-only",
  passport.authenticate("jwt", { session: false }),
  authorizeRoles("Admin"),
  (req, res) => {
    res.json({ message: "Welcome Admin!" });
  }
);

export default router;
