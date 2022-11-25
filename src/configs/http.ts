import axios from "axios";
import type { AxiosInstance } from "axios";
import { VideoListTransformer } from "@/services/responseTransformations/VideoListTransformer";
import { VideoTransformer } from "@/services/responseTransformations/VideoTransformer";

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
    const requestURL = response.request.responseURL;

    const videoListRegex = new RegExp(`^${BASE_URL}/schedule/web*`);
    if (videoListRegex.test(requestURL))
      return { ...response, data: VideoListTransformer(response.data) };

    const videoRegex = new RegExp(`^${BASE_URL}/shows/*`);
    if (videoRegex.test(requestURL))
      return { ...response, data: VideoTransformer(response.data) };
  }
  return response;
});
