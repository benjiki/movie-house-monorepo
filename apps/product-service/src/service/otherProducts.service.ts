import { prisma, OtherProductType } from "@repo/product-db";
import { uploadToMinio } from "../utils/uploadToMinio";
import { deleteFromMinio } from "../utils/deleteFromMinio";
import { ApiError } from "../utils/ApiError";

// service/otherProduct.service.ts
export const createOtherProductService = async (data: {
  productName: string;
  productFile: Buffer;
  fileName: string;
  contentType: string;
  adminId: number;
  otherProductCategoryId: number;
  otherProductType: OtherProductType;
  price: number;
}) => {
  const otherProductExists = await prisma.otherProducts.findFirst({
    where: { productName: data.productName },
  });

  if (otherProductExists) {
    throw new ApiError(400, "product name is already used");
  }

  // Upload image to MinIO and get the filename (key)
  const fileKey = await uploadToMinio(
    data.productFile,
    data.fileName,
    data.contentType,
    "otherproducts"
  );

  // Store only filename in DB
  return prisma.otherProducts.create({
    data: {
      productName: data.productName,
      productImage: fileKey, // only the filename
      adminId: data.adminId,
      otherProductCategoryId: Number(data.otherProductCategoryId),
      otherProductType: data.otherProductType,
      price: Number(data.price),
    },
  });
};

export const updateOtherProductService = async (data: {
  productName: string;
  productFile: Buffer;
  fileName: string;
  contentType: string;
  adminId: number;
  otherProductCategoryId: number;
  otherProductType: OtherProductType;
  price: number;
  id: number;
}) => {
  // 1️⃣ Check OtherProduct exists
  const findOtherProduct = await prisma.otherProducts.findUnique({
    where: { id: data.id },
  });

  if (!findOtherProduct) {
    throw new ApiError(400, "Product not found");
  }

  // 2️⃣ Check for duplicate name
  const duplicateOtherProduct = await prisma.otherProducts.findFirst({
    where: {
      productName: data.productName,
      NOT: { id: data.id },
    },
  });

  if (duplicateOtherProduct) {
    throw new ApiError(400, "Product name already exists");
  }

  let fileKey = findOtherProduct.productImage; // default to old image name

  // 3️⃣ If new image provided → upload new & delete old
  if (data.productFile && data.fileName && data.contentType) {
    // Upload new file
    fileKey = await uploadToMinio(
      data.productFile,
      data.fileName,
      data.contentType,
      "otherproducts"
    );

    // Delete old file (only if it exists)
    if (findOtherProduct.productImage) {
      await deleteFromMinio(findOtherProduct.productImage, "otherproducts");
    }
  }

  // 4️⃣ Update DB
  return prisma.otherProducts.update({
    where: { id: data.id },
    data: {
      productName: data.productName,
      productImage: fileKey, // only the filename
      adminId: data.adminId,
      otherProductCategoryId: Number(data.otherProductCategoryId),
      otherProductType: data.otherProductType,
      price: Number(data.price),
    },
  });
};

export const allOtherProductsService = async () => {
  const getOtherProducts = await prisma.otherProducts.findMany();

  if (!getOtherProducts) {
    throw new ApiError(404, "no product found in the database ");
  }
  return getOtherProducts;
};

export const OtherProductsByIdService = async (data: { id: number }) => {
  const getOtherProductsById = await prisma.otherProducts.findUnique({
    where: { id: data.id },
  });

  if (!getOtherProductsById) {
    throw new ApiError(404, "no product with this id found in the database ");
  }
  return getOtherProductsById;
};

export const OtherProductDelete = async (data: { id: number }) => {
  const findOtherProducts = await prisma.otherProducts.findFirst({
    where: { id: data.id },
  });
  if (!findOtherProducts) {
    throw new ApiError(400, "Product  not found ");
  }

  // Delete old file (only if it exists)
  if (findOtherProducts.productImage) {
    await deleteFromMinio(findOtherProducts.productImage, "otherproducts");
  }

  return prisma.otherProducts.delete({ where: { id: data.id } });
};
