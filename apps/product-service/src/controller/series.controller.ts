import { Request, Response } from "express";
import { ApiError, ApiSuccess } from "../utils/ApiError";
import * as seriesService from "../service/series.service";
import {
  seriesCreateVaidationSchema,
  seriesUpdateBodySchemaSchema,
} from "../validations/series.validations";
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

export const UpdateSeriesController = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  // 1️⃣ Validate body (serieseName, adminId, seriesCategoryId,....)
  const { error } = seriesUpdateBodySchemaSchema.validate(req.body);
  const id = Number(req.params.id);
  if (error) {
    throw new ApiError(400, "Series  is required.");
  }
  if (!req.file) {
    throw new ApiError(400, "Series image is required.");
  }
  if (!id) {
    throw new ApiError(400, "Series Id is required. ");
  }

  const series = await seriesService.updateSeriesService({
    ...req.body,
    adminId: req.user?.id,
    seriesFile: req.file.buffer,
    fileName: req.file.originalname,
    contentType: req.file.mimetype,
    id,
  });
  res.status(201).json(new ApiSuccess(series, "Movie created successfully"));
  // ✅ Use a different event name for clarity
  io.emit("movieUpdated", series);
};

export const GetAllseriesController = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  const allSeries = await seriesService.allSeriesService();
  res.status(201).json(new ApiSuccess(allSeries));
};

export const GetSeriesByIdController = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  const id = Number(req.params.id);
  const seriesById = await seriesService.seriesByIdService({ id });
  res.status(201).json(new ApiSuccess(seriesById));
};

export const DeleteSeriesController = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  const id = parseInt(req.params.id);
  const seriesDelete = await seriesService.seriesDelete({
    id,
  });
  res
    .status(201)
    .json(new ApiSuccess(seriesDelete, "Series deleted successfully"));
};
