-- CreateEnum
CREATE TYPE "OtherProductType" AS ENUM ('BRAND_NEW', 'REFURBISHED', 'SLIGHTLY_USED', 'USED', 'HEAVILY_USED', 'FOR_PARTS');

-- CreateTable
CREATE TABLE "movies" (
    "id" SERIAL NOT NULL,
    "movieName" TEXT NOT NULL,
    "movieDis" TEXT NOT NULL,
    "movieImage" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "adminId" INTEGER NOT NULL,
    "movieCategoryId" INTEGER NOT NULL,

    CONSTRAINT "movies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "movieCategory" (
    "id" SERIAL NOT NULL,
    "movieCategoryName" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "adminId" INTEGER NOT NULL,

    CONSTRAINT "movieCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "series" (
    "id" SERIAL NOT NULL,
    "seriesName" TEXT NOT NULL,
    "seriesDis" TEXT NOT NULL,
    "seriesImage" TEXT NOT NULL,
    "seriesSeason" INTEGER NOT NULL,
    "seriesEpisode" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "adminId" INTEGER NOT NULL,
    "seriesCategoryId" INTEGER NOT NULL,

    CONSTRAINT "series_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "seriesCategory" (
    "id" SERIAL NOT NULL,
    "seriesCategoryName" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "adminId" INTEGER NOT NULL,

    CONSTRAINT "seriesCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "otherProducts" (
    "id" SERIAL NOT NULL,
    "productName" TEXT NOT NULL,
    "productImage" TEXT NOT NULL,
    "otherProductType" "OtherProductType" NOT NULL DEFAULT 'BRAND_NEW',
    "price" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "adminId" INTEGER NOT NULL,
    "otherProductCategoryId" INTEGER NOT NULL,

    CONSTRAINT "otherProducts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "otherProductCategory" (
    "id" SERIAL NOT NULL,
    "otherProductCategoryName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "adminId" INTEGER NOT NULL,

    CONSTRAINT "otherProductCategory_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "movies" ADD CONSTRAINT "movies_movieCategoryId_fkey" FOREIGN KEY ("movieCategoryId") REFERENCES "movieCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "series" ADD CONSTRAINT "series_seriesCategoryId_fkey" FOREIGN KEY ("seriesCategoryId") REFERENCES "seriesCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "otherProducts" ADD CONSTRAINT "otherProducts_otherProductCategoryId_fkey" FOREIGN KEY ("otherProductCategoryId") REFERENCES "otherProductCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
