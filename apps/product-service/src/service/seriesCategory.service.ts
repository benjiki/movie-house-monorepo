import { prisma } from "@repo/product-db";
import { ApiError } from "../utils/ApiError";
export const seriesCreateCategoryService = async (data: {
  seriesCategoryName: string;
  price: number;
  adminId: number;
}) => {
  const seriesCategoryExists = await prisma.seriesCategory.findFirst({
    where: { seriesCategoryName: data.seriesCategoryName },
  });

  if (seriesCategoryExists) {
    throw new ApiError(400, "Series category name is already used");
  }

  return prisma.seriesCategory.create({ data });
};
