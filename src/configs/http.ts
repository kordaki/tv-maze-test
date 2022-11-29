import axios from "axios";
import type { AxiosInstance } from "axios";
import { videoListTransformer } from "@/services/responseTransformations/videoListTransformer";
import { videoTransformer } from "@/services/responseTransformations/videoTransformer";
import { searchVideosTransformer } from "@/services/responseTransformations/searchVideosTransformer";

// should be defined in .env
const BASE_URL = "https://api.tvmaze.com";

const apiClient: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-type": "application/json",
  },
});
export default apiClient;

apiClient.interceptors.response.use((response: any) => {
  if (response.status === 200) {
    // Transform success response in case of having a lighter cache
    const requestURL = response.request.responseURL;

    const videoListRegex = new RegExp(`^${BASE_URL}/schedule/web*`);
    if (videoListRegex.test(requestURL))
      return { ...response, data: videoListTransformer(response.data) };

    const videoRegex = new RegExp(`^${BASE_URL}/shows/*`);
    if (videoRegex.test(requestURL))
      return { ...response, data: videoTransformer(response.data) };

    const searchVideoRegex = new RegExp(`^${BASE_URL}/search/shows?q*`);
    if (searchVideoRegex.test(requestURL))
      return { ...response, data: searchVideosTransformer(response.data) };
  }
  return response;
});
