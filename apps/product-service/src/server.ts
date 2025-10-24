// apps/auth-service/src/server.ts OR index.ts
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Server } from "socket.io";
import http from "http";
import movieCategoryRouter from "./router/movieCategory.route";
import movieRouter from "./router/movie.route";
import seriesRouter from "./router/series.route";
import seriesCategoryRouter from "./router/SeriesCategory.route";
import { ApiError } from "./utils/ApiError";
import { ensureBucketExists } from "./utils/initMinioBucket";

// Load env variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8001;

// ✅ Middleware
app.use(cors());
app.use(express.json()); // Parse JSON bodies

const server = http.createServer(app);

export const io = new Server(server, {
  cors: {
    origin: "*", // use your frontend URL in production, e.g. "https://myapp.com"
  },
});

(async () => {
  await ensureBucketExists(process.env.S3_BUCKET!);
  await ensureBucketExists("series");
})();

// ✅ Routes
app.use("/api/movieCategories", movieCategoryRouter);
app.use("/api/movies", movieRouter);

app.use("/api/seiesCategory", seriesCategoryRouter);
app.use("/api/series", seriesRouter);

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
  console.log(`🚀 Product service running on port ${PORT}`);
});

io.on("connection", (socket) => {
  console.log("✅ User connected:", socket.id);

  socket.on("disconnect", () => {
    console.log("❌ User disconnected:", socket.id);
  });
});
