import express, { Router } from "express";
import { authenticateJWT, authorizeRoles } from "@repo/auth-lib";

import * as otherproductController from "../controller/otherProduct.controller";
import { validateParams, validateRequest } from "../middleware/validateRequest";
import * as validation from "../validations/otherProducts.validations";
import { upload } from "../utils/upload";
const router: Router = express.Router();

router.post(
  "/other-products",
  authenticateJWT,
  authorizeRoles("Admin"),
  upload.single("productImage"),
  validateRequest(validation.otherproductCreateVaidationSchema),
  otherproductController.CreateOtherProductsServiceController
);

router.put(
  "/other-products/:id",
  authenticateJWT,
  authorizeRoles("Admin"),
  validateParams(validation.otherproductIdParamSchema),
  validateRequest(validation.otherproductUpdateBodySchema),
  upload.single("productImage"),
  otherproductController.UpdateOtherProductsServiceController
);

router.delete(
  "/other-products/:id",
  authenticateJWT,
  authorizeRoles("Admin"),
  validateParams(validation.otherproductIdParamSchema),
  otherproductController.DeleteOtherProductsServiceController
);

router.get(
  "/other-products/:id",
  validateParams(validation.otherproductIdParamSchema),
  otherproductController.GetOtherProductsServiceByIdController
);

router.get(
  "/other-products",
  otherproductController.GetAllOtherProductsServiceController
);
export default router;
