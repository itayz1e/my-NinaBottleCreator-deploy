import fetch from "node-fetch";

export async function imageToBase64(url:any) {
  const response = await fetch(url);
  const data = await response.buffer();
  return data.toString("base64");
}

export function generateS3Key() {
  const timestamp = new Date().getTime();
  const randomString = Math.random().toString(36).substring(2, 10);
  return `${timestamp}-${randomString}`;
}
