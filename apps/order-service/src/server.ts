// apps/auth-service/src/server.ts OR index.ts
import express from "express";
import dotenv from "dotenv";
import orderRouter from "./routes/order.route";
import { connectMongo } from "./utils/connectMongo";

import { startOrderConsumer } from "./kafka/consumer";
import { producer } from "./kafka/producer";

// Load env variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8002;

// ✅ Parse JSON request bodies
app.use(express.json());

await producer.connect();
await startOrderConsumer();

console.log("✅ Order Service Kafka Producer & Consumer connected");

// ✅ Health check
app.get("/", (req, res) => {
  res.send("Order Service is running 🚀");
});

// ✅ Connect to MongoDB before starting routes
connectMongo()
  .then(() => {
    console.log("MongoDB connected ✅");

    // Register routes
    app.use("/api/orders", orderRouter);

    // ✅ Start server
    app.listen(PORT, () => {
      console.log(`🚀 Order service running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1);
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
