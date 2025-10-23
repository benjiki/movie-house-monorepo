import { Request, Response } from "express";
import { ApiError, ApiSuccess } from "../utils/ApiError";
import * as movieService from "../service/movie.service";
import { movieCreateVaidationSchema } from "../validations/movies.validations";

interface AuthenticatedRequest extends Request {
  user?: { id: number; role: string };
  file?: Express.Multer.File; // add this line
}

export const CreateMovie = async (req: AuthenticatedRequest, res: Response) => {
  // 1️⃣ Validate body (movieName, adminId, movieCategoryId)
  const { error } = movieCreateVaidationSchema.validate(req.body);
  if (error) {
    throw new ApiError(400, "Movie  is required.");
  }
  if (!req.file) {
    throw new ApiError(400, "Movie image is required.");
  }

  const movie = await movieService.createMovieService({
    ...req.body,
    adminId: req.user?.id,
    movieFile: req.file.buffer,
    fileName: req.file.originalname,
    contentType: req.file.mimetype,
  });
  res.status(201).json(new ApiSuccess(movie, "Movie created successfully"));
};
