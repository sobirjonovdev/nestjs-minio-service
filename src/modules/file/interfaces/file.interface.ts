export interface FileInfo {
  filename: string;
  size: number;
  mimetype: string;
  etag: string;
  lastModified?: Date;
}
