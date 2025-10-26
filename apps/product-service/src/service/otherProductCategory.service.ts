import { prisma } from "@repo/product-db";
import { ApiError } from "../utils/ApiError";

export const otherProductCreateService = async (data: {
  otherProductCategoryName: string;
  adminId: number;
}) => {
  const otherProductCategorExists = await prisma.otherProductCategory.findFirst(
    {
      where: { otherProductCategoryName: data.otherProductCategoryName },
    }
  );

  if (otherProductCategorExists) {
    throw new ApiError(400, "this product category name is already used ");
  }

  return prisma.otherProductCategory.create({ data });
};

export const otherProductCategoryUpdate = async (data: {
  id: number;
  otherProductCategoryName: string;
  adminId: number;
}) => {
  const findotherProductCategory = await prisma.otherProductCategory.findUnique(
    {
      where: { id: data.id },
    }
  );
  if (!findotherProductCategory) {
    throw new ApiError(400, "product category not found");
  }

  // Check if another category with the same name already exists (excluding current one)
  const duplicateCategory = await prisma.otherProductCategory.findFirst({
    where: {
      otherProductCategoryName: data.otherProductCategoryName,
      NOT: { id: data.id },
    },
  });

  if (duplicateCategory) {
    throw new ApiError(400, "product category name already exists");
  }

  return prisma.otherProductCategory.update({ where: { id: data.id }, data });
};

export const otherProductCategoryDelete = async (data: { id: number }) => {
  const findotherProductCategory = await prisma.otherProductCategory.findFirst({
    where: { id: data.id },
  });
  if (!findotherProductCategory) {
    throw new ApiError(400, "product category not found ");
  }
  // Check if there are any otherProducts using this category
  const findOtherProductsUsingThisCategory = await prisma.otherProducts.count({
    where: { otherProductCategoryId: data.id },
  });

  if (findOtherProductsUsingThisCategory > 0) {
    throw new ApiError(
      400,
      `This category is being used by ${findOtherProductsUsingThisCategory} products. Please remove the reference before deleting the category.`
    );
  }

  return prisma.otherProductCategory.delete({ where: { id: data.id } });
};

export const getOtherProductCategoryByID = async (data: { id: number }) => {
  const otherProductCategory = await prisma.otherProductCategory.findUnique({
    where: { id: data.id },
  });

  if (!otherProductCategory) {
    throw new ApiError(404, "product category not found");
  }

  return otherProductCategory;
};

export const getAllotherProductCategory = async () => {
  const getotherProductCategories =
    await prisma.otherProductCategory.findMany();

  if (!getotherProductCategories) {
    throw new ApiError(404, "no product category found in the database ");
  }
  return getotherProductCategories;
};
