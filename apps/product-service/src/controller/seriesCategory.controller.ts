import { Request, Response } from "express";
import * as seriesCatogryService from "../service/seriesCategory.service";
import { ApiSuccess } from "../utils/ApiError";

interface AuthenticatedRequest extends Request {
  user?: { id: number; role: string };
}
export const seriesCreateCategoryController = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  const seriesCategoryCreate =
    await seriesCatogryService.seriesCreateCategoryService({
      ...req.body,
      adminId: req.user?.id,
    });

  res
    .status(201)
    .json(
      new ApiSuccess(seriesCategoryCreate, "Category created successfully")
    );
};
