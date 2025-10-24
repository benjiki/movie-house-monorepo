import { Request, Response } from "express";
import * as orderService from "../services/order.service";

import {
  CreateOrderSchema,
  UpdateOrderStatusSchema,
} from "../validators/order.validator";

/**
 * Extend Express Request to include authenticated user info.
 * This keeps typing local to this file.
 */
interface AuthenticatedRequest extends Request {
  user?: {
    id: number;
    role: string;
  };
}

/**
 * Create a new order.
 * - Validates request body with Zod
 * - Uses authenticated user's ID (if available)
 */
export const createOrder = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const parsed = CreateOrderSchema.parse(req.body);

    const order = await orderService.createOrder({
      ...parsed, // spread validated data
      userId: req.user?.id, // attach userId if logged in
    });

    res.status(201).json(order);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

/**
 * Update order status
 */
export const updateOrderStatus = async (req: Request, res: Response) => {
  try {
    const { ticket } = req.params;

    if (!ticket) {
      return res.status(400).json({ message: "Missing ticket parameter" });
    }

    const parsed = UpdateOrderStatusSchema.parse(req.body);
    const order = await orderService.updateOrderStatus(ticket, parsed.status);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.json(order);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

/**
 * Get all orders
 */
export const getOrders = async (_req: Request, res: Response) => {
  try {
    const orders = await orderService.getAllOrders();
    res.json(orders);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * Get a single order by ticket
 */
export const getOrderByTicket = async (req: Request, res: Response) => {
  try {
    const { ticket } = req.params;

    if (!ticket) {
      return res.status(400).json({ message: "Missing ticket parameter" });
    }

    const order = await orderService.getOrderByTicket(ticket);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.json(order);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
