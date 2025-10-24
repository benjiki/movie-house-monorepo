import express, { Router } from "express";
import { Request, Response } from "express";
import {
  authenticateJWT,
  authorizeRoles,
  authenticateJWTOptional,
} from "@repo/auth-lib";
import * as orderController from "../controllers/order.controller";
const router: Router = express.Router();
interface AuthenticatedRequest extends Request {
  user?: { id: number; role: string };
}
router.get(
  "/admin-orders",
  authenticateJWT,
  authorizeRoles("Admin"),
  (req: AuthenticatedRequest, res: Response) => {
    res.json({ message: "Access granted for Admin", user: req.user });
  }
);

router.post("/", authenticateJWTOptional, orderController.createOrder);
// this router is for admin to get all the orders
router.get(
  "/",
  authenticateJWT,
  authorizeRoles("Admin"),
  orderController.getOrders
);

// this router is for admin to get orders by customers ticket
router.get(
  "ticket/:ticket",
  authenticateJWT,
  authorizeRoles("Admin"),
  orderController.getOrderByTicket
);

//this one is for admin to change the status for orders
router.patch(
  "ticket/:ticket/status",
  authenticateJWT,
  authorizeRoles("Admin"),
  orderController.updateOrderStatus
);

// this one is for auth users/customers to get there orders or previous orders
router.get(
  "/my-orders",
  authenticateJWT, // must be logged in
  orderController.getUserOrders
);

// delete any  orders admin
router.delete(
  "/ticket/:ticket",
  authenticateJWT,
  authorizeRoles("Admin"),
  orderController.deleteOrderByAdmin
);
// customers delete there own orders

router.delete(
  "/my-orders/:ticket",
  authenticateJWT,
  orderController.deleteUserOrder
);
export default router;
