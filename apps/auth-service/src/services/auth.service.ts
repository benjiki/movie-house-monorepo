import { prisma, Prisma } from "@repo/auth-db";

export const regUserService = async (data: Prisma.UserCreateInput) => {
  return prisma.user.create({ data });
};
