import axios from "axios";
import type { AxiosInstance } from "axios";

const apiClient: AxiosInstance = axios.create({
  baseURL: "https://api.tvmaze.com",
  headers: {
    "Content-type": "application/json",
  },
});

export default apiClient;

apiClient.interceptors.request.use((response) => {
  console.log("-- $$$ --- ", response);
  return response;
});
