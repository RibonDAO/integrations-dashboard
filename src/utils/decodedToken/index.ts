import { Buffer } from "buffer";

export function decodeJwt(token: string) {
  if (!token) return null;

  const decode = JSON.parse(
    Buffer.from(token.split(".")[1], "base64").toString(),
  );

  return decode;
}
