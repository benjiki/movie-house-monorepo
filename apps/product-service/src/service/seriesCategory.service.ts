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

export const seriesCategoryUpdate = async (data: {
  id: number;
  seriesCategoryName: string;
  price: number;
  adminId: number;
}) => {
  const findSeriesCategory = await prisma.seriesCategory.findUnique({
    where: { id: data.id },
  });
  if (!findSeriesCategory) {
    throw new ApiError(400, "Series category not found");
  }

  // Check if another category with the same name already exists (excluding current one)
  const duplicateCategory = await prisma.seriesCategory.findFirst({
    where: {
      seriesCategoryName: data.seriesCategoryName,
      NOT: { id: data.id },
    },
  });

  if (duplicateCategory) {
    throw new ApiError(400, "Series category name already exists");
  }

  return prisma.seriesCategory.update({ where: { id: data.id }, data });
};

export const seriesCategoryDelete = async (data: { id: number }) => {
  const findSeriesCategory = await prisma.seriesCategory.findFirst({
    where: { id: data.id },
  });
  if (!findSeriesCategory) {
    throw new ApiError(400, "series category not found ");
  }
  // Check if there are any series using this category
  const findSeriesUsingThisCategory = await prisma.series.count({
    where: { seriesCategoryId: data.id },
  });

  if (findSeriesUsingThisCategory > 0) {
    throw new ApiError(
      400,
      `This category is being used by ${findSeriesUsingThisCategory} series. Please remove the reference before deleting the category.`
    );
  }

  return prisma.seriesCategory.delete({ where: { id: data.id } });
};

export const getSeriesCategoryByID = async (data: { id: number }) => {
  const seriesCategory = await prisma.seriesCategory.findUnique({
    where: { id: data.id },
  });

  if (!seriesCategory) {
    throw new ApiError(404, "Series category not found");
  }

  return seriesCategory;
};

export const getAllSeriesCategory = async () => {
  const getSeriesCategories = await prisma.seriesCategory.findMany();

  if (!getSeriesCategories) {
    throw new ApiError(404, "no movies found in the database ");
  }
  return getSeriesCategories;
};
