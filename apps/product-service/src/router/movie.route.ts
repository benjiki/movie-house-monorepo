import express, { Router } from "express";
import { authenticateJWT, authorizeRoles } from "@repo/auth-lib";

import * as movieController from "../controller/movie.controller";
import { validateParams, validateRequest } from "../middleware/validateRequest";
import * as validation from "../validations/movies.validations";
import { upload } from "../utils/upload";
const router: Router = express.Router();

router.post(
  "/movie",
  authenticateJWT,
  authorizeRoles("Admin"),
  upload.single("movieImage"),
  validateRequest(validation.movieCreateVaidationSchema),
  movieController.CreateMovieController
);

router.put(
  "/movie/:id",
  authenticateJWT,
  authorizeRoles("Admin"),
  validateParams(validation.movieIdParamSchema),
  validateRequest(validation.movieUpdateBodySchemaSchema),
  upload.single("movieImage"),
  movieController.UpdateMovieController
);

router.get("/movie", movieController.GetAllmoviesController);
export default router;
