import { Request, Response } from "express";
import * as seriesCatogryService from "../service/seriesCategory.service";
import { ApiError, ApiSuccess } from "../utils/ApiError";

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

export const UpdateSeriesCategoryController = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  const id = Number(req.params.id);

  if (isNaN(id)) {
    throw new ApiError(400, "Invalid movie category ID");
  }

  const seriesCategoryUpdated = await seriesCatogryService.seriesCategoryUpdate(
    {
      ...req.body,
      adminId: req.body?.id,
      id,
    }
  );
  res
    .status(201)
    .json(
      new ApiSuccess(seriesCategoryUpdated, "Category updated successfully")
    );
};

export const DeleteSeriesCategoryController = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  const id = parseInt(req.params.id);
  const seriesCategoryDelete = await seriesCatogryService.seriesCategoryDelete({
    id,
  });
  res
    .status(201)
    .json(
      new ApiSuccess(seriesCategoryDelete, "Category deleted successfully")
    );
};

export const GetSeriesCategoryByIdController = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  const id = parseInt(req.params.id);
  const GetSingleSeriesCatagory =
    await seriesCatogryService.getSeriesCategoryByID({
      id,
    });
  res.status(201).json(new ApiSuccess(GetSingleSeriesCatagory, ""));
};

export const GetAllSeriescategoryController = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  const GetAllSeriesCatagories =
    await seriesCatogryService.getAllSeriesCategory();
  res.status(201).json(new ApiSuccess(GetAllSeriesCatagories, ""));
};
