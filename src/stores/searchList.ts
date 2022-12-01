import { reactive } from "vue";
import { defineStore } from "pinia";
import { searchVideosRequest } from "@/services/api/VideoDataService";

type storeVideos = {
  isLoading: boolean;
  error?: Error | null;
  list?: any;
};

export const useSearchListStore = defineStore("searchList", () => {
  const videos = reactive({
    isLoading: false,
    error: null,
    list: {},
  });

  // actions
  const updateVideos = ({ isLoading, error, list }: storeVideos) => {
    videos.error = error;
    videos.isLoading = isLoading;
    if (list) videos.list = list;
  };

  const searchVideoRequest = async (query: string) => {
    if (videos.isLoading) return;
    updateVideos({ isLoading: true, error: null });
    const [error, response] = await searchVideosRequest(query);
    updateVideos({ isLoading: false, error: error, list: response });
  };

  return {
    videos,
    updateVideos,
    searchVideoRequest,
  };
});
