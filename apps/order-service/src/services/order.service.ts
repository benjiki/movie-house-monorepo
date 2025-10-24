import { Order } from "@repo/order-db";
import type { OrderSchemaType } from "@repo/order-db";

export const createOrder = async (data: Record<string, any>) => {
  const order = new Order(data);
  return await order.save();
};
export const getAllOrders = async () => {
  return await Order.find().sort({ createdAt: -1 });
};

/**
 * Fetch all orders made by a specific user.
 */
export const getUserOrders = async (userId: number) => {
  return await Order.find({ userId }).sort({ createdAt: -1 });
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

/**
 * Admin delete any order by ticket
 */
export const deleteOrderByAdmin = async (ticket: string) => {
  const deleted = await Order.findOneAndDelete({ ticket });
  return deleted;
};

/**
 * User delete only their own order
 */
export const deleteUserOrder = async (ticket: string, userId: number) => {
  const deleted = await Order.findOneAndDelete({ ticket, userId });
  return deleted;
};
