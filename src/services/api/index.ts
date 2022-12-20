import {
  apiGet,
  apiDelete,
  apiPut,
  apiPost,
  api,
} from "@ribon.io/shared/dist/services";
import { formattedLanguage } from "lib/currentLanguage";

const RIBON_API = "https://dapp-dev-api.ribon.io/";

export const baseURL = process.env.REACT_APP_RIBON_API || RIBON_API;
export async function initializeApi() {
  api.defaults.baseURL = baseURL;

  // TODO update this to use the useLanguage hook / localstorage when it's available
  const lang = await formattedLanguage(navigator.language);
  api.interceptors.request.use((config) => {
    const authHeaders = { Language: lang };
    // eslint-disable-next-line no-param-reassign
    config.headers = { ...authHeaders, ...config.headers };

    return config;
  });
}

export { apiGet, apiDelete, apiPut, apiPost };
export default api;
