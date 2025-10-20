import jwt, { JwtPayload } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export interface AuthPayload extends JwtPayload {
  id: number;
  role: string;
}

export const verifyJWT = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader?.startsWith("Bearer ")) {
    return res.status(401).json({ message: "No token provided" });
  }

  const token = authHeader.split(" ")[1];

  if (!process.env.JWT_SECRET) {
    console.error("JWT_SECRET is not defined in environment variables");
    return res.status(500).json({ message: "Internal server error" });
  }

  const secret = process.env.JWT_SECRET as string;

  try {
    // ✅ Properly cast through `unknown`
    const decoded = jwt.verify(token!, secret) as unknown as AuthPayload;

    // ✅ Validate structure at runtime
    if (typeof decoded.id === "number" && typeof decoded.role === "string") {
      req.user = {
        id: decoded.id,
        role: decoded.role,
      };

      return next();
    }

    return res.status(403).json({ message: "Invalid token payload" });
  } catch (err) {
    return res.status(403).json({ message: "Invalid or expired token" });
  }
};
