import { reactive } from "vue";
import { defineStore } from "pinia";
import { searchVideosRequest } from "@/services/api/VideoDataService";

export const useSearchedListStore = defineStore("searchedList", () => {
  const videos = reactive({
    isLoading: false,
    error: null,
    list: {},
  });

  // actions
  const searchVideoList = async (query: string) => {
    videos.isLoading = true;
    videos.error = null;
    const [error, response] = await searchVideosRequest(query);
    videos.error = error;
    videos.isLoading = false;
    videos.list = response;
    console.log(" searchVideoList resp", response);
    console.log(" searchVideoList ", videos.list);
  };

  return {
    videos,
    searchVideoList,
  };
});
