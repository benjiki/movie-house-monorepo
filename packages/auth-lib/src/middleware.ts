import { Request, Response, NextFunction } from "express";
import { verifyAccessToken } from "./token";

export const authenticateJWT = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;
  if (!authHeader)
    return res.status(401).json({ message: "Access token missing" });

  const token = authHeader.split(" ")[1];
  try {
    const decoded = verifyAccessToken(token!) as { id: number; role: string };
    (req as any).user = decoded; // attach user to req
    next();
  } catch (err) {
    res.status(403).json({ message: "Invalid or expired token" });
  }
};

export const authorizeRoles = (...allowedRoles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const user = (req as any).user;
    if (!user || !allowedRoles.includes(user.role)) {
      return res.status(403).json({ message: "Forbidden: Insufficient role" });
    }
    next();
  };
};
