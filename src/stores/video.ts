import { reactive } from "vue";
import { defineStore } from "pinia";
import { getVideoRequest } from "@/services/api/VideoDataService";

export const useVideoStore = defineStore("video", () => {
  const video = reactive({
    isLoading: false,
    error: null,
    data: {},
  });

  // actions
  const getVideo = async (id: number) => {
    video.isLoading = true;
    video.error = null;
    const [error, response] = await getVideoRequest(id);
    video.error = error;
    video.isLoading = false;
    video.data = response;
  };

  return {
    video,
    getVideo,
  };
});
