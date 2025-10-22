import { Request, Response } from "express";
import * as movieService from "../service/movie.service";
import { ApiSuccess } from "../utils/ApiError";
interface AuthenticatedRequest extends Request {
  user?: { id: number; role: string };
}
export const CreateMovieCategory = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  const movieCategory = await movieService.movieCategoryCreate({
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
  const movieCategoryUpdated = await movieService.movieCategoryUpdate({
    ...req.body,
    adminId: req.body?.id,
  });
  res
    .status(201)
    .json(
      new ApiSuccess(movieCategoryUpdated, "Category updated successfully")
    );
};
