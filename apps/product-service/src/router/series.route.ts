import express, { Router } from "express";
import { authenticateJWT, authorizeRoles } from "@repo/auth-lib";
import * as seriesController from "../controller/series.controller";
import { validateParams, validateRequest } from "../middleware/validateRequest";
import * as validation from "../validations/series.validations";
import { upload } from "../utils/upload";
const router: Router = express.Router();

router.post(
  "/series",
  authenticateJWT,
  authorizeRoles("Admin"),
  upload.single("seriesImage"),
  validateRequest(validation.seriesCreateVaidationSchema),
  seriesController.CreateSeriesController
);

router.put(
  "/series/:id",
  authenticateJWT,
  authorizeRoles("Admin"),
  validateParams(validation.seriesIdParamSchema),
  validateRequest(validation.seriesUpdateBodySchemaSchema),
  upload.single("seriesImage"),
  seriesController.UpdateSeriesController
);

router.delete(
  "/series/:id",
  authenticateJWT,
  authorizeRoles("Admin"),
  validateParams(validation.seriesIdParamSchema),
  seriesController.DeleteSeriesController
);

router.get(
  "/series/:id",
  validateParams(validation.seriesIdParamSchema),
  seriesController.GetSeriesByIdController
);
router.get("/series", seriesController.GetAllseriesController);
export default router;
