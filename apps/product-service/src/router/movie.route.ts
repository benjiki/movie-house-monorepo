import express, { Router } from "express";
import { authenticateJWT, authorizeRoles } from "@repo/auth-lib";

import * as movieController from "../controller/movie.controller";
import { validateRequest } from "../middleware/validateRequest";
import * as validation from "../validations/movies.validations";
import { upload } from "../utils/upload";
const router: Router = express.Router();

router.post(
  "/movie",
  authenticateJWT,
  authorizeRoles("Admin"),
  upload.single("movieImage"),
  validateRequest(validation.movieCreateVaidationSchema),
  movieController.CreateMovie
);

export default router;
