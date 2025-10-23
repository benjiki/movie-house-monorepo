import { prisma } from "@repo/product-db";
import { uploadToMinio } from "../utils/uploadToMinio";
import { ApiError } from "../utils/ApiError";

// service/movie.service.ts
export const createMovieService = async (data: {
  movieName: string;
  movieFile: Buffer;
  fileName: string;
  contentType: string;
  adminId: number;
  movieCategoryId: number;
}) => {
  const movieExists = await prisma.movies.findFirst({
    where: { movieName: data.movieName },
  });

  if (movieExists) {
    throw new ApiError(400, "Movie name is already used");
  }

  // Upload image to MinIO and get the filename (key)
  const fileKey = await uploadToMinio(
    data.movieFile,
    data.fileName,
    data.contentType,
    "movies"
  );

  // Store only filename in DB
  return prisma.movies.create({
    data: {
      movieName: data.movieName,
      movieImage: fileKey, // only the filename
      adminId: data.adminId,
      movieCategoryId: Number(data.movieCategoryId),
    },
  });
};
