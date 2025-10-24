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

/**
 * Optional authentication middleware
 * - Attaches req.user if token is valid
 * - Does NOT reject if token is missing or invalid
 */
export const authenticateJWTOptional = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return next(); // no token → continue

  const token = authHeader.split(" ")[1];
  if (!token) return next(); // no token → continue

  try {
    const decoded = verifyAccessToken(token!) as { id: number; role: string };
    (req as any).user = decoded; // attach user
  } catch (err) {
    console.log("Invalid token, continuing as unauthenticated");
  }

  next();
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
