// utils/uploadToMinio.ts
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { s3Client } from "./minioClient";
import { randomUUID } from "crypto";

export const uploadToMinio = async (
  fileBuffer: Buffer,
  fileName: string,
  contentType: string,
  bucketName: string
) => {
  const key = `${randomUUID()}-${fileName}`; // file name with UUID

  await s3Client.send(
    new PutObjectCommand({
      Bucket: bucketName,
      Key: key,
      Body: fileBuffer,
      ContentType: contentType,
    })
  );

  // ✅ Return only the file name (key), not full URL
  return key;
};
