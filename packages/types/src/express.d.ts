// packages/types/src/express.d.ts
import "express";

declare module "express" {
  interface Request {
    user?: {
      id: number;
      role: string;
    };
  }
}
