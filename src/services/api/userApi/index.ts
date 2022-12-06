import { AxiosResponse } from "axios";
import { apiPost } from "..";

interface Data {
  idToken: string;
}

// NOTE: Maybe you will need to change the apiPost endpoint
const userApi = {
  postUser: (data: Data, config: any): Promise<AxiosResponse<any>> =>
    apiPost("auth/request", { data }, config),
};

export default userApi;
