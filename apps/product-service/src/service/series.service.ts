import { prisma } from "@repo/product-db";
import { ApiError } from "../utils/ApiError";
import { uploadToMinio } from "../utils/uploadToMinio";
import { deleteFromMinio } from "../utils/deleteFromMinio";

export const createSeriesService = async (data: {
  seriesName: string;
  seriesFile: Buffer;
  fileName: string;
  contentType: string;
  seriesSeason: number;
  seriesEpisode: number;
  adminId: number;
  seriesCategoryId: number;
}) => {
  const seriesExist = await prisma.series.findFirst({
    where: { seriesName: data.seriesName },
  });

  if (seriesExist) {
    throw new ApiError(400, "Series name is already used");
  }

  const fileKey = await uploadToMinio(
    data.seriesFile,
    data.fileName,
    data.contentType,
    "series"
  );

  return prisma.series.create({
    data: {
      seriesName: data.seriesName,
      seriesImage: fileKey, //only file name
      adminId: data.adminId,
      seriesCategoryId: Number(data.seriesCategoryId),
      seriesSeason: Number(data.seriesSeason),
      seriesEpisode: Number(data.seriesEpisode),
    },
  });
};

export const updateSeriesService = async (data: {
  seriesName: string;
  seriesFile: Buffer;
  fileName: string;
  contentType: string;
  seriesSeason: number;
  seriesEpisode: number;
  adminId: number;
  seriesCategoryId: number;
  id: number;
}) => {
  const findSeries = await prisma.series.findUnique({
    where: { id: data.id },
  });

  if (!findSeries) {
    throw new ApiError(400, "Series not found");
  }

  // 2️⃣ Check for duplicate name
  const duplicateSeries = await prisma.series.findFirst({
    where: {
      seriesName: data.seriesName,
      NOT: { id: data.id },
    },
  });
  if (duplicateSeries) {
    throw new ApiError(400, "Series name already exists");
  }

  let fileKey = findSeries.seriesImage; // default to old image name

  // 3️⃣ If new image provided → upload new & delete old
  if (data.seriesFile && data.fileName && data.contentType) {
    // Upload new file
    fileKey = await uploadToMinio(
      data.seriesFile,
      data.fileName,
      data.contentType,
      "series"
    );

    // Delete old file (only if it exists)
    if (findSeries.seriesImage) {
      await deleteFromMinio(findSeries.seriesImage, "series");
    }
  }

  return prisma.series.update({
    where: { id: data.id },
    data: {
      seriesName: data.seriesName,
      seriesImage: fileKey, //only file name
      adminId: data.adminId,
      seriesCategoryId: Number(data.seriesCategoryId),
      seriesSeason: Number(data.seriesSeason),
      seriesEpisode: Number(data.seriesEpisode),
    },
  });
};

export const allSeriesService = async () => {
  const getSeires = await prisma.series.findMany();

  if (!getSeires) {
    throw new ApiError(404, "no series found in the database ");
  }
  return getSeires;
};

export const seriesByIdService = async (data: { id: number }) => {
  const getSeriesById = await prisma.series.findUnique({
    where: { id: data.id },
  });

  if (!getSeriesById) {
    throw new ApiError(404, "no movies with this id found in the database ");
  }
  return getSeriesById;
};

export const seriesDelete = async (data: { id: number }) => {
  const findSeries = await prisma.series.findFirst({
    where: { id: data.id },
  });
  if (!findSeries) {
    throw new ApiError(400, "series  not found ");
  }

  // Delete old file (only if it exists)
  if (findSeries.seriesImage) {
    await deleteFromMinio(findSeries.seriesImage, "series");
  }

  return prisma.series.delete({ where: { id: data.id } });
};
