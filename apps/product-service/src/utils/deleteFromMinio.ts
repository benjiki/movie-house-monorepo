import { DeleteObjectCommand } from "@aws-sdk/client-s3";
import { s3Client } from "./minioClient";

export const deleteFromMinio = async (fileKey: string, bucketName: string) => {
  try {
    await s3Client.send(
      new DeleteObjectCommand({
        Bucket: bucketName,
        Key: fileKey,
      })
    );
    console.log(`🗑️ Deleted file "${fileKey}" from bucket "${bucketName}"`);
  } catch (err) {
    console.error("❌ Failed to delete file from MinIO:", err);
  }
};
