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
router.get("/", orderController.getOrders);
router.get("/:ticket", orderController.getOrderByTicket);
router.patch("/:ticket/status", orderController.updateOrderStatus);

export default router;
