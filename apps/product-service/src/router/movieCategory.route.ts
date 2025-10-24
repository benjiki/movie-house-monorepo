import express, { Router } from "express";
import { authenticateJWT, authorizeRoles } from "@repo/auth-lib";
import * as movieCategoryController from "../controller/movieCategory.controller";
import { validateParams, validateRequest } from "../middleware/validateRequest";
import * as validation from "../validations/movies.validations";

const router: Router = express.Router();

router.post(
  "/movie-category",
  authenticateJWT,
  authorizeRoles("Admin"),
  validateRequest(validation.movieCategoryCreateVaidationSchema),
  movieCategoryController.CreateMovieCategoryController
);
router.put(
  "/movie-category/:id",
  authenticateJWT,
  authorizeRoles("Admin"),
  validateParams(validation.movieCategoryIdParamSchema),
  validateRequest(validation.movieCategoryUpdateBodySchema),
  movieCategoryController.UpdateMovieCategoryController
);

router.delete(
  "/movie-category/:id",
  authenticateJWT,
  authorizeRoles("Admin"),
  validateParams(validation.movieCategoryIdParamSchema),
  movieCategoryController.DeleteMovieCategoryController
);

router.get(
  "/movie-category/:id",
  authenticateJWT,
  authorizeRoles("Admin", "Customer"),
  validateParams(validation.movieCategoryIdParamSchema),
  movieCategoryController.GetMovieCategoryByIdController
);

router.get(
  "/movie-category",
  movieCategoryController.GetAllMoviecategoryController
);

export default router;
