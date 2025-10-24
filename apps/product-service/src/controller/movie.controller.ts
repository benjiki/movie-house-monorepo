import { Request, Response } from "express";
import { ApiError, ApiSuccess } from "../utils/ApiError";
import * as movieService from "../service/movie.service";
import { movieCreateVaidationSchema } from "../validations/movies.validations";
import multer from "multer";
import { io } from "../server";

interface AuthenticatedRequest extends Request {
  user?: { id: number; role: string };
  file?: Express.Multer.File; // add this line
}

export const CreateMovieController = async (
  req: AuthenticatedRequest,
  res: Response
) => {
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
  io.emit("movieCreated", movie);
};

export const UpdateMovieController = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  // 1️⃣ Validate body (movieName, adminId, movieCategoryId)
  const { error } = movieCreateVaidationSchema.validate(req.body);
  const id = Number(req.params.id);
  if (error) {
    throw new ApiError(400, "Movie  is required.");
  }
  if (!req.file) {
    throw new ApiError(400, "Movie image is required.");
  }
  if (!id) {
    throw new ApiError(400, "Movie Id is required. ");
  }

  const movie = await movieService.updateMovieService({
    ...req.body,
    adminId: req.user?.id,
    movieFile: req.file.buffer,
    fileName: req.file.originalname,
    contentType: req.file.mimetype,
    id,
  });
  res.status(201).json(new ApiSuccess(movie, "Movie created successfully"));
  // ✅ Use a different event name for clarity
  io.emit("movieUpdated", movie);
};

export const GetAllmoviesController = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  const allMovies = await movieService.allMoviesService();
  res.status(201).json(new ApiSuccess(allMovies));
  io.emit("movieCreated", allMovies);
};
