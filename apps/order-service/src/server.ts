// apps/auth-service/src/server.ts OR index.ts
import express from "express";
import dotenv from "dotenv";
import orderRouter from "./routes/order.route";
// Load env variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8001;

// ✅ Routes
app.use("/api/orders", orderRouter);

// ✅ Health check
app.get("/", (req, res) => {
  res.send("Order Service is running 🚀");
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
