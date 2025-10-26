import express, { Router } from "express";
import { authenticateJWT, authorizeRoles } from "@repo/auth-lib";
import * as otherProductsCategoryController from "../controller/otherProductCategory.controller";
import { validateParams, validateRequest } from "../middleware/validateRequest";
import * as validation from "../validations/otherProducts.validations";

const router: Router = express.Router();

router.post(
  "/otherproduct-category",
  authenticateJWT,
  authorizeRoles("Admin"),
  validateRequest(validation.otherproductCategoryCreateVaidationSchema),
  otherProductsCategoryController.CreateOtherProductCategoryController
);
router.put(
  "/otherproduct-category/:id",
  authenticateJWT,
  authorizeRoles("Admin"),
  validateParams(validation.otherproductCategoryIdParamSchema),
  validateRequest(validation.otherproductCategoryUpdateBodySchema),
  otherProductsCategoryController.UpdateOtherProductCategoryController
);

router.delete(
  "/otherproduct-category/:id",
  authenticateJWT,
  authorizeRoles("Admin"),
  validateParams(validation.otherproductCategoryIdParamSchema),
  otherProductsCategoryController.DeleteOtherProductCategoryController
);

router.get(
  "/otherproduct-category/:id",
  authenticateJWT,
  authorizeRoles("Admin", "Customer"),
  validateParams(validation.otherproductCategoryIdParamSchema),
  otherProductsCategoryController.GetOtherProductCategoryByIdController
);

router.get(
  "/otherproduct-category",
  otherProductsCategoryController.GetAllOtherProductCategoryController
);

export default router;
