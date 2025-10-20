import { Request, Response } from "express";
import { Prisma } from "@repo/auth-db"; // ✅ Only import types here
import * as auth from "../services/auth.service"; // ✅ Good

export const registerUser = async (req: Request, res: Response) => {
  try {
    const data: Prisma.UserCreateInput = req.body;
    const user = await auth.regUserService(data); // 🔄 Fix: typo "serivce" → user
    res.status(201).json({ message: "User registered successfully", user });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ error: "Registration failed" });
  }
};
