import express, { Router } from "express";
import { authenticateJWT, authorizeRoles } from "@repo/auth-lib";
import * as seriesCategoryController from "../controller/seriesCategory.controller";
import { validateRequest, validateParams } from "../middleware/validateRequest";
import * as validation from "../validations/series.validations";
const router: Router = express.Router();

router.post(
  "/series-category",
  authenticateJWT,
  authorizeRoles("Admin"),
  validateRequest(validation.seriesCategoryCreateVaidationSchema),
  seriesCategoryController.seriesCreateCategoryController
);

router.put(
  "/series-category/:id",
  authenticateJWT,
  authorizeRoles("Admin"),
  validateParams(validation.seriesCategoryIdParamSchema),
  validateRequest(validation.seriesCategoryUpdateBodySchema),
  seriesCategoryController.UpdateSeriesCategoryController
);

router.delete(
  "/series-category/:id",
  authenticateJWT,
  authorizeRoles("Admin"),
  validateParams(validation.seriesCategoryIdParamSchema),
  seriesCategoryController.DeleteSeriesCategoryController
);

router.get(
  "/series-category/:id",
  validateParams(validation.seriesCategoryIdParamSchema),
  seriesCategoryController.GetSeriesCategoryByIdController
);

router.get(
  "/series-category",
  seriesCategoryController.GetAllSeriescategoryController
);
export default router;
