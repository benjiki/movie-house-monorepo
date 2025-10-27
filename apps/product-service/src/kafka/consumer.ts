import { createKafkaClient, createConsumer, createProducer } from "@repo/kafka";
import { prisma } from "@repo/product-db";

const kafka = createKafkaClient("product-service");
const consumer = createConsumer(kafka, "product-service-group");
const producer = createProducer(kafka);

export const startProductConsumer = async () => {
  await consumer.connect();
  await producer.connect();

  await consumer.subscribe([
    {
      topicName: "validate-products-request",
      topicHandler: async (message) => {
        const { orderId, items } = message;
        const missing: any[] = [];

        for (const item of items) {
          let found = null;
          switch (item.productType) {
            case "movie":
              found = await prisma.movies.findUnique({
                where: { id: item.productId },
              });
              break;
            case "series":
              found = await prisma.series.findUnique({
                where: { id: item.productId },
              });
              break;
            case "otherProduct":
              found = await prisma.otherProducts.findUnique({
                where: { id: item.productId },
              });
              break;
          }

          if (!found) {
            missing.push({
              productId: item.productId,
              productType: item.productType,
            });
          }
        }

        const valid = missing.length === 0;

        // ✅ Send validation result back
        await producer.send("validate-products-response", {
          orderId,
          valid,
          missing,
        });
      },
    },
  ]);
};
