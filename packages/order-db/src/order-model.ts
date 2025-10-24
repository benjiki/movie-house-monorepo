import mongoose, { Schema, InferSchemaType, model } from "mongoose";

export const OrderStatus = ["pending", "success", "failed"] as const;
export type OrderStatusType = (typeof OrderStatus)[number];

const OrderSchema = new Schema(
  {
    userId: { type: Number, required: false },
    ticket: { type: String, required: true, unique: true },

    items: [
      {
        productId: { type: Number, required: true },
        productType: {
          type: String,
          enum: ["movie", "series", "otherProduct"],
          required: true,
        },
        quantity: { type: Number, default: 1 },
        price: { type: Number, required: true },
        metadata: { type: Object },
      },
    ],

    totalAmount: { type: Number, required: true, default: 0 },

    status: {
      type: String,
      enum: OrderStatus,
      default: "pending",
    },
  },
  { timestamps: true }
);

// Auto-generate ticket
OrderSchema.pre("validate", function (next) {
  if (!this.ticket) {
    this.ticket = `TCKT_${Math.random().toString(36).slice(2, 10).toUpperCase()}`;
  }
  next();
});

// Auto-calculate total before saving
OrderSchema.pre("save", function (next) {
  if (this.items && this.items.length > 0) {
    this.totalAmount = this.items.reduce(
      (sum, item) => sum + item.price * (item.quantity || 1),
      0
    );
  }
  next();
});

export type OrderSchemaType = InferSchemaType<typeof OrderSchema>;
export const Order = model<OrderSchemaType>("Order", OrderSchema);
