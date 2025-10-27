import { createKafkaClient, createConsumer } from "@repo/kafka";
import { processValidationResponse } from "../services/productValidationHandler";

const kafka = createKafkaClient("order-service");
const consumer = createConsumer(kafka, "order-service-group");

export const startOrderConsumer = async () => {
  await consumer.connect();

  await consumer.subscribe([
    {
      topicName: "validate-products-response",
      topicHandler: processValidationResponse,
    },
  ]);
};
