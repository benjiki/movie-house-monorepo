import express, { Router } from "express";
import { Request, Response } from "express";
import { authenticateJWT, authorizeRoles } from "@repo/auth-lib";
import * as movieController from "../controller/movie.controller";
const router: Router = express.Router();
import { validateParams, validateRequest } from "../middleware/validateRequest";
import * as validation from "../validations/movies.validations";

router.post(
  "/movie-category",
  authenticateJWT,
  authorizeRoles("Admin"),
  validateRequest(validation.movieCategoryCreateVaidationSchema),
  movieController.CreateMovieCategory
);
router.put(
  "/movie-category",
  authenticateJWT,
  authorizeRoles("Admin"),
  validateRequest(validation.movieCategoryUpdateVaidationSchema),
  movieController.UpdateMovieCategory
);

router.delete(
  "/movie-category/:id",
  authenticateJWT,
  authorizeRoles("Admin"),
  validateParams(validation.movieCategoryIdParamSchema),
  movieController.DeleteMovieCategory
);

export default router;
