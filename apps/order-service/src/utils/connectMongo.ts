import { connectOrderDB } from "@repo/order-db";

export const connectMongo = async () => {
  try {
    await connectOrderDB();
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    process.exit(1);
  }
};
