import { Request, Response } from "express";
import * as movieService from "../service/movie.service";
import { ApiError, ApiSuccess } from "../utils/ApiError";
interface AuthenticatedRequest extends Request {
  user?: { id: number; role: string };
}
export const CreateMovieCategory = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  if (!req.user) {
    throw new ApiError(401, "Unauthorized: No user info");
  }
  const movieCategory = await movieService.movieCategoryCreate({
    ...req.body,
    adminId: req.user?.id,
  });
  res
    .status(201)
    .json(new ApiSuccess(movieCategory, "Category created successfully"));
};
