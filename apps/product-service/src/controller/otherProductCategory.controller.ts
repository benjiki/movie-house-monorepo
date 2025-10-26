import { Request, Response } from "express";
import * as otherProductCategoryService from "../service/otherProductCategory.service";
import { ApiError, ApiSuccess } from "../utils/ApiError";
interface AuthenticatedRequest extends Request {
  user?: { id: number; role: string };
}
export const CreateOtherProductCategoryController = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  const otherProductCategory =
    await otherProductCategoryService.otherProductCreateService({
      ...req.body,
      adminId: req.user?.id,
    });
  res
    .status(201)
    .json(
      new ApiSuccess(otherProductCategory, "Category created successfully")
    );
};

export const UpdateOtherProductCategoryController = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  const id = Number(req.params.id);

  if (isNaN(id)) {
    throw new ApiError(400, "Invalid product category ID");
  }

  const otherProductCategoryUpdated =
    await otherProductCategoryService.otherProductCategoryUpdate({
      ...req.body,
      adminId: req.body?.id,
      id,
    });
  res
    .status(201)
    .json(
      new ApiSuccess(
        otherProductCategoryUpdated,
        "Category updated successfully"
      )
    );
};

export const DeleteOtherProductCategoryController = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  const id = parseInt(req.params.id);
  const otherProductCategoryDelete =
    await otherProductCategoryService.otherProductCategoryDelete({
      id,
    });
  res
    .status(201)
    .json(
      new ApiSuccess(
        otherProductCategoryDelete,
        "Category deleted successfully"
      )
    );
};

export const GetOtherProductCategoryByIdController = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  const id = parseInt(req.params.id);
  const GetSingleOtherProductCategory =
    await otherProductCategoryService.getOtherProductCategoryByID({
      id,
    });
  res.status(201).json(new ApiSuccess(GetSingleOtherProductCategory, ""));
};

export const GetAllOtherProductCategoryController = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  const GetAllMovieCatagories =
    await otherProductCategoryService.getAllotherProductCategory();
  res.status(201).json(new ApiSuccess(GetAllMovieCatagories, ""));
};
