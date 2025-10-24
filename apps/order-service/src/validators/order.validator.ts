import { z } from "zod";

export const OrderItemSchema = z.object({
  productId: z.number(),
  productType: z.enum(["movie", "series", "otherProduct"]),
  quantity: z.number().default(1),
  price: z.number(),
  metadata: z.record(z.string(), z.any()).optional(),
});

export const CreateOrderSchema = z.object({
  userId: z.number().optional(),
  items: z.array(OrderItemSchema).min(1, "At least one item required"),
});

export const UpdateOrderStatusSchema = z.object({
  status: z.enum(["pending", "success", "failed"]),
});
