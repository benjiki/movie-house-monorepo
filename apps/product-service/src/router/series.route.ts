import express, { Router } from "express";
import { authenticateJWT, authorizeRoles } from "@repo/auth-lib";
import * as seriesController from "../controller/series.controller";
import { validateRequest } from "../middleware/validateRequest";
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

export default router;
