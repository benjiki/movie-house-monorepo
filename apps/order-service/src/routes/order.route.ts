import express, { Router } from "express";
import { Request, Response } from "express";
import { authenticateJWT, authorizeRoles } from "@repo/auth-lib";

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

export default router;
