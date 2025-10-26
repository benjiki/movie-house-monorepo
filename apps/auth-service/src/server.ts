// apps/auth-service/src/server.ts OR index.ts
import express from "express";
import passport from "passport";
import cors from "cors";
import dotenv from "dotenv";
import { configurePassport } from "./passport/jwt.strategy";
import authRoutes from "./routes/auth.route"; // ✅ Your route file
import { ApiError } from "./utils/ApiError";

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
    const isProduction = process.env.NODE_ENV === "production";

    if (!isProduction) {
      // Show full error in development
      console.error("Unhandled error:", err);
    }

    const statusCode = err instanceof ApiError ? err.statusCode : 500;
    const message =
      err instanceof ApiError ? err.message : "Internal server error";

    res.status(statusCode).json({ error: message });
  }
);

// ✅ Start server
app.listen(PORT, () => {
  console.log(`🚀 Auth service running on port ${PORT}`);
});
