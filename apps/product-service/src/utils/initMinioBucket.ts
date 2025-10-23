import { s3Client } from "./minioClient";
import {
  CreateBucketCommand,
  HeadBucketCommand,
  PutBucketPolicyCommand,
} from "@aws-sdk/client-s3";

export const ensureBucketExists = async (bucketName: string) => {
  try {
    // Check if bucket exists
    await s3Client.send(new HeadBucketCommand({ Bucket: bucketName }));
    console.log(`✅ Bucket "${bucketName}" already exists`);
  } catch (err: any) {
    if (err.name === "NotFound" || err.$metadata?.httpStatusCode === 404) {
      // 1️⃣ Create the bucket
      await s3Client.send(new CreateBucketCommand({ Bucket: bucketName }));
      console.log(`🪣 Created bucket "${bucketName}"`);

      // 2️⃣ Apply a *public read* policy right after creation
      const publicPolicy = {
        Version: "2012-10-17",
        Statement: [
          {
            Effect: "Allow",
            Principal: { AWS: ["*"] },
            Action: ["s3:GetBucketLocation", "s3:ListBucket"],
            Resource: [`arn:aws:s3:::${bucketName}`],
          },
          {
            Effect: "Allow",
            Principal: { AWS: ["*"] },
            Action: ["s3:GetObject"],
            Resource: [`arn:aws:s3:::${bucketName}/*`],
          },
        ],
      };

      await s3Client.send(
        new PutBucketPolicyCommand({
          Bucket: bucketName,
          Policy: JSON.stringify(publicPolicy),
        })
      );

      console.log(`🌍 Public read policy applied to "${bucketName}"`);
    } else {
      console.error("❌ Error checking/creating bucket:", err);
      throw err;
    }
  }
};
