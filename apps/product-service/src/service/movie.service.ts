import { prisma } from "@repo/product-db";
import { uploadToMinio } from "../utils/uploadToMinio";
import { deleteFromMinio } from "../utils/deleteFromMinio";
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

export const updateMovieService = async (data: {
  movieName: string;
  movieFile?: Buffer; // made optional
  fileName?: string;
  contentType?: string;
  adminId: number;
  movieCategoryId: number;
  id: number;
}) => {
  // 1️⃣ Check movie exists
  const findMovie = await prisma.movies.findUnique({
    where: { id: data.id },
  });

  if (!findMovie) {
    throw new ApiError(400, "Movie not found");
  }

  // 2️⃣ Check for duplicate name
  const duplicateMovie = await prisma.movies.findFirst({
    where: {
      movieName: data.movieName,
      NOT: { id: data.id },
    },
  });

  if (duplicateMovie) {
    throw new ApiError(400, "Movie name already exists");
  }

  let fileKey = findMovie.movieImage; // default to old image name

  // 3️⃣ If new image provided → upload new & delete old
  if (data.movieFile && data.fileName && data.contentType) {
    // Upload new file
    fileKey = await uploadToMinio(
      data.movieFile,
      data.fileName,
      data.contentType,
      "movies"
    );

    // Delete old file (only if it exists)
    if (findMovie.movieImage) {
      await deleteFromMinio(findMovie.movieImage, "movies");
    }
  }

  // 4️⃣ Update DB
  return prisma.movies.update({
    where: { id: data.id },
    data: {
      movieName: data.movieName,
      movieImage: fileKey,
      adminId: data.adminId,
      movieCategoryId: Number(data.movieCategoryId),
    },
  });
};
