// apps/auth-service/src/server.ts OR index.ts
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// Load env variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8001;

// ✅ Middleware
app.use(cors());
app.use(express.json()); // Parse JSON bodies

// ✅ Routes
// app.use("/api/auth", authRoutes);

// ✅ Health check
app.get("/", (req, res) => {
  res.send("Product Service is running 🚀");
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
  console.log(`🚀 Product service running on port ${PORT}`);
});
