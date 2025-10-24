import mongoose from "mongoose";

let isConnected = false;

export const connectOrderDB = async () => {
  if (isConnected) return;

  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URL is not defined in env file!");
  }

  try {
    await mongoose.connect(process.env.MONGO_URI);
    isConnected = true;
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
    throw error;
  }
};
