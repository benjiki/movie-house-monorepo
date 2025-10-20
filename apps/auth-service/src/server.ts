// apps/auth-service/src/server.ts OR index.ts
import express from "express";
import passport from "passport";
import cors from "cors";
import dotenv from "dotenv";
import { configurePassport } from "./passport/jwt.strategy";
import authRoutes from "./routes/auth.route"; // ✅ Your route file

// Load env variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// ✅ Middleware
app.use(cors());
app.use(express.json()); // Parse JSON bodies
app.use(passport.initialize());
configurePassport(passport); // ✅ Register JWT strategy

// ✅ Routes
app.use("/api/auth", authRoutes);

// ✅ Health check
app.get("/", (req, res) => {
  res.send("Auth Service is running 🚀");
});

// ✅ Global error handler (optional)
app.use(
  (
    err: any,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    console.error("Unhandled error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
);

// ✅ Start server
app.listen(PORT, () => {
  console.log(`🚀 Auth service running on port ${PORT}`);
});
