import { AxiosInterceptorManager } from "axios";
import api from ".";

interface AxiosInterceptorManagerWithHandlers
  extends AxiosInterceptorManager<any> {
  handlers: Array<any>;
}

describe("request interceptors", () => {
  describe("headers interceptors", () => {
    const requestInterceptors = api.interceptors
      .request as AxiosInterceptorManagerWithHandlers;

    it("snake cases the keys", () => {
      const [snakeCaseInterceptor] = requestInterceptors.handlers;
      const result = snakeCaseInterceptor.fulfilled({
        data: { myKey: "key" },
      });

      expect(result.data).toEqual({ my_key: "key" });
    });
  });

  describe("response interceptors", () => {
    const responseInterceptors = api.interceptors
      .response as AxiosInterceptorManagerWithHandlers;

    it("camel cases the keys", () => {
      const [camelCaseInterceptor] = responseInterceptors.handlers;
      const result = camelCaseInterceptor.fulfilled({
        data: { my_key: "key" },
      });

      expect(result.data).toEqual({ myKey: "key" });
    });
  });
});
