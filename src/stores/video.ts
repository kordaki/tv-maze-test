import { reactive } from "vue";
import { defineStore } from "pinia";
import { getVideoRequest } from "@/services/api/VideoDataService";
import type { Video } from "@/types/VideoType";

type storeVideo = {
  isLoading: boolean;
  error?: Error | null;
  data?: Video;
};

export const useVideoStore = defineStore("video", () => {
  const video: storeVideo = reactive({
    isLoading: false,
    error: null,
    data: {},
  });

  // actions
  const updateVideo = ({ isLoading, error, data }: storeVideo) => {
    video.error = error;
    video.isLoading = isLoading;
    if (data) video.data = data;
  };

  const getVideo = async (id: number) => {
    if (video.isLoading) return;
    updateVideo({ isLoading: true, error: null });
    const [error, response] = await getVideoRequest(id);
    updateVideo({ isLoading: false, error: error, data: response });
  };

  return {
    video,
    updateVideo,
    getVideo,
  };
});
