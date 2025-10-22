import { prisma } from "@repo/product-db";
import { ApiError } from "../utils/ApiError";
export const createMovieService = async (data: {
  movieName: string;
  movieImage: string;
  adminId: number;
  movieCategoryId: number;
}) => {
  const movieExists = await prisma.movies.findFirst({
    where: { movieName: data.movieName },
  });
  if (movieExists) {
    throw new Error("Movie name is already used");
  }
  return prisma.movies.create({
    data: {
      movieName: data.movieName,
      movieImage: data.movieImage,
      adminId: data.adminId,
      movieCategoryId: data.movieCategoryId,
    },
  });
};

export const movieCategoryCreate = async (data: {
  movieCategoryName: string;
  price: number;
  adminId: number;
}) => {
  const movieCategoryExists = await prisma.movieCategory.findFirst({
    where: { movieCategoryName: data.movieCategoryName },
  });
  if (movieCategoryExists) {
    throw new ApiError(400, "Movie Category already exists");
  }

  return prisma.movieCategory.create({ data });
};

export const movieCategoryUpdate = async (data: {
  id: number;
  movieCategoryName: string;
  price: number;
  adminId: number;
}) => {
  const findMovieCategory = await prisma.movieCategory.findUnique({
    where: { id: data.id },
  });
  if (!findMovieCategory) {
    throw new ApiError(400, "movie category not found");
  }

  // Check if another category with the same name already exists (excluding current one)
  const duplicateCategory = await prisma.movieCategory.findFirst({
    where: {
      movieCategoryName: data.movieCategoryName,
      NOT: { id: data.id },
    },
  });

  if (duplicateCategory) {
    throw new ApiError(400, "Movie category name already exists");
  }

  return prisma.movieCategory.update({ where: { id: data.id }, data });
};

export const movieCategoryDelete = async (data: { id: number }) => {
  const findMovieCategory = await prisma.movieCategory.findFirst({
    where: { id: data.id },
  });
  if (!findMovieCategory) {
    throw new ApiError(400, "movie category not found ");
  }

  return prisma.movieCategory.delete({ where: { id: data.id } });
};

export const getMovieCategoryByID = async (data: { id: number }) => {
  const movieCategory = await prisma.movieCategory.findUnique({
    where: { id: data.id },
  });

  if (!movieCategory) {
    throw new ApiError(404, "Movie category not found");
  }

  return movieCategory;
};

export const getAllMovieCategory = async () => {
  const getMovieCategories = await prisma.movieCategory.findMany();

  if (!getMovieCategories) {
    throw new ApiError(404, "no movies found in the database ");
  }
  return getMovieCategories;
};
