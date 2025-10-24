import { Order } from "@repo/order-db";
import type { OrderSchemaType } from "@repo/order-db";

export const createOrder = async (data: Record<string, any>) => {
  const order = new Order(data);
  return await order.save();
};
export const getAllOrders = async () => {
  return await Order.find().sort({ createdAt: -1 });
};

export const getOrderByTicket = async (ticket: string) => {
  return await Order.findOne({ ticket });
};

export const updateOrderStatus = async (ticket: string, status: string) => {
  const order = await Order.findOneAndUpdate(
    { ticket },
    { status },
    { new: true }
  );
  return order;
};
