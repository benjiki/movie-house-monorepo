import express, { Router } from "express";
import { authenticateJWT, authorizeRoles } from "@repo/auth-lib";
import * as seriesCategoryController from "../controller/seriesCategory.controller";
import { validateRequest } from "../middleware/validateRequest";
import * as validation from "../validations/series.validations";
const router: Router = express.Router();

router.post(
  "/series-category",
  authenticateJWT,
  authorizeRoles("Admin"),
  validateRequest(validation.seriesCategoryCreateVaidationSchema),
  seriesCategoryController.seriesCreateCategoryController
);

export default router;
