import { prisma } from "@repo/product-db";
import { ApiError } from "../utils/ApiError";
import { uploadToMinio } from "../utils/uploadToMinio";
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
