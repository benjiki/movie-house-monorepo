import { Request, Response } from "express";
import { ApiError, ApiSuccess } from "../utils/ApiError";
import * as otherProductsService from "../service/otherProducts.service";
import {
  otherproductCreateVaidationSchema,
  otherproductUpdateBodySchema,
} from "../validations/otherProducts.validations";
import multer from "multer";
import { io } from "../server";

interface AuthenticatedRequest extends Request {
  user?: { id: number; role: string };
  file?: Express.Multer.File; // add this line
}

export const CreateOtherProductsServiceController = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  const { error } = otherproductCreateVaidationSchema.validate(req.body);
  if (error) {
    throw new ApiError(400, "Product is required.");
  }
  if (!req.file) {
    throw new ApiError(400, "Product image is required.");
  }

  const otherproduct = await otherProductsService.createOtherProductService({
    ...req.body,
    adminId: req.user?.id,
    productFile: req.file.buffer,
    fileName: req.file.originalname,
    contentType: req.file.mimetype,
  });
  res
    .status(201)
    .json(new ApiSuccess(otherproduct, "Product created successfully"));
  io.emit("productCreated", otherproduct);
};

export const UpdateOtherProductsServiceController = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  const { error } = otherproductUpdateBodySchema.validate(req.body);
  const id = Number(req.params.id);
  if (error) {
    throw new ApiError(400, "Product  is required.");
  }
  if (!req.file) {
    throw new ApiError(400, "Product image is required.");
  }
  if (!id) {
    throw new ApiError(400, "Product Id is required. ");
  }

  const otherproduct = await otherProductsService.updateOtherProductService({
    ...req.body,
    adminId: req.user?.id,
    productFile: req.file.buffer,
    fileName: req.file.originalname,
    contentType: req.file.mimetype,
    id,
  });
  res
    .status(201)
    .json(new ApiSuccess(otherproduct, "Product Updated successfully"));
  // ✅ Use a different event name for clarity
  io.emit("otherProductUpdated", otherproduct);
};

export const GetAllOtherProductsServiceController = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  const allOtherProductsService =
    await otherProductsService.allOtherProductsService();
  res.status(201).json(new ApiSuccess(allOtherProductsService));
};

export const GetOtherProductsServiceByIdController = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  const id = Number(req.params.id);
  const otherProductsServiceById =
    await otherProductsService.OtherProductsByIdService({
      id,
    });
  res.status(201).json(new ApiSuccess(otherProductsServiceById));
};

export const DeleteOtherProductsServiceController = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  const id = parseInt(req.params.id);
  const otherProductsServiceDelete =
    await otherProductsService.OtherProductDelete({
      id,
    });
  res
    .status(201)
    .json(
      new ApiSuccess(otherProductsServiceDelete, "Product deleted successfully")
    );
};
