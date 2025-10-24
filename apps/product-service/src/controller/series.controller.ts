import { Request, Response } from "express";
import { ApiError, ApiSuccess } from "../utils/ApiError";
import * as seriesService from "../service/series.service";
import { seriesCreateVaidationSchema } from "../validations/series.validations";
import multer from "multer";
import { io } from "../server";

interface AuthenticatedRequest extends Request {
  user?: { id: number; role: string };
  file?: Express.Multer.File; // add this line
}

export const CreateSeriesController = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  const { error } = seriesCreateVaidationSchema.validate(req.body);
  if (error) {
    throw new ApiError(400, "Series  is required.");
  }
  if (!req.file) {
    throw new ApiError(400, "Series image is required.");
  }

  const series = await seriesService.createSeriesService({
    ...req.body,
    adminId: req.user?.id,
    seriesFile: req.file.buffer,
    fileName: req.file.originalname,
    contentType: req.file.mimetype,
  });
  res.status(201).json(new ApiSuccess(series, "Series created successfully"));
  io.emit("movieCreated", series);
};
