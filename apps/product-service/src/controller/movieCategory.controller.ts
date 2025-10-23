import { Request, Response } from "express";
import * as movieCategoryService from "../service/movieCategory.service";
import { ApiError, ApiSuccess } from "../utils/ApiError";
interface AuthenticatedRequest extends Request {
  user?: { id: number; role: string };
}
export const CreateMovieCategory = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  const movieCategory = await movieCategoryService.movieCategoryCreate({
    ...req.body,
    adminId: req.user?.id,
  });
  res
    .status(201)
    .json(new ApiSuccess(movieCategory, "Category created successfully"));
};

export const UpdateMovieCategory = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  const id = Number(req.params.id);

  if (isNaN(id)) {
    throw new ApiError(400, "Invalid movie category ID");
  }

  const movieCategoryUpdated = await movieCategoryService.movieCategoryUpdate({
    ...req.body,
    adminId: req.body?.id,
    id,
  });
  res
    .status(201)
    .json(
      new ApiSuccess(movieCategoryUpdated, "Category updated successfully")
    );
};

export const DeleteMovieCategory = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  const id = parseInt(req.params.id);
  const movieCategoryDelete = await movieCategoryService.movieCategoryDelete({
    id,
  });
  res
    .status(201)
    .json(new ApiSuccess(movieCategoryDelete, "Category deleted successfully"));
};

export const GetMovieCategoryById = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  const id = parseInt(req.params.id);
  const GetSingleMovieCatagory =
    await movieCategoryService.getMovieCategoryByID({
      id,
    });
  res.status(201).json(new ApiSuccess(GetSingleMovieCatagory, ""));
};

export const GetAllMoviecategory = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  const GetAllMovieCatagories =
    await movieCategoryService.getAllMovieCategory();
  res.status(201).json(new ApiSuccess(GetAllMovieCatagories, ""));
};
