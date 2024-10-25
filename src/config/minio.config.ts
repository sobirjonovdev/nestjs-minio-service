import { registerAs } from '@nestjs/config';

export default registerAs('minio', () => ({
  endPoint: process.env.MINIO_ENDPOINT || 'localhost',
  port: parseInt(process.env.MINIO_PORT, 10) || 9000,
  accessKey: process.env.MINIO_ACCESS_KEY || 'minioadmin',
  secretKey: process.env.MINIO_SECRET_KEY || 'minioadmin',
  defaultBucket: process.env.MINIO_DEFAULT_BUCKET || 'default-bucket',
  useSSL: process.env.MINIO_USE_SSL === 'true',
}));
