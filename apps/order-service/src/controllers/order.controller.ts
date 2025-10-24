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
      return res
        .status(404)
        .json({ message: "Order with this ticket and status not found" });
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
      return res
        .status(404)
        .json({ message: " Order with this ticket not found" });
    }

    res.json(order);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * Get all orders created by the authenticated user
 */
export const getUserOrders = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized: no user found" });
    }

    const orders = await orderService.getUserOrders(req.user.id);

    if (!orders.length) {
      return res.status(404).json({ message: "No orders found for this user" });
    }

    res.json(orders);
  } catch (error: any) {
    console.error("Error fetching user orders:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

/**
 * User delete their own order
 */
export const deleteUserOrder = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    const { ticket } = req.params;
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    if (!ticket) {
      return res.status(400).json({ message: "Missing ticket parameter" });
    }

    const deleted = await orderService.deleteUserOrder(ticket, userId);

    if (!deleted) {
      return res
        .status(404)
        .json({ error: "Order not found or not owned by user" });
    }

    res.json({ message: "Order deleted successfully" });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

/**
 * Admin delete any order
 */
export const deleteOrderByAdmin = async (req: Request, res: Response) => {
  try {
    const { ticket } = req.params;

    if (!ticket) {
      return res.status(400).json({ message: "Missing ticket parameter" });
    }

    const deleted = await orderService.deleteOrderByAdmin(ticket);

    if (!deleted) {
      return res.status(404).json({ error: "Order not found" });
    }

    res.json({ message: "Order deleted successfully (Admin)" });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};
