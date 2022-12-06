import { decodeJwt } from ".";

describe("should format according to language", () => {
  it("expects to return a decoded token", () => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
    const decoded = { iat: 1516239022, name: "John Doe", sub: "1234567890" };

    expect(decodeJwt(token)).toStrictEqual(decoded);
  });

  it("expects to return a null when no pass token", () => {
    const token = "";

    expect(decodeJwt(token)).toStrictEqual(null);
  });
});
