import { createKafkaClient, createProducer } from "@repo/kafka";

const kafka = createKafkaClient("order-service");
export const producer = createProducer(kafka);
