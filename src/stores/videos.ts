import { reactive, computed } from "vue";
import { defineStore } from "pinia";
import { getVideoScheduleRequest } from "@/services/api/VideoDataService";

export const useVideosStore = defineStore("videos", () => {
  const videos = reactive({
    isLoading: false,
    error: null,
    list: {},
  });

  // actions
  const getVideoList = async () => {
    videos.isLoading = true;
    videos.error = null;
    const [error, response] = await getVideoScheduleRequest();
    videos.error = error;
    videos.isLoading = false;
    videos.list = response;
  };

  // getters
  const videoListByGenres = computed(() => {
    if (videos.error) return {};
    const videoListGroupedByGenre = { unknown: [] };
    Object.values(videos.list).forEach((video: any) => {
      if (video.genres.length === 0) {
        videoListGroupedByGenre["unknown"].push(video.id);
        return;
      }
      video.genres.forEach((genre) => {
        if (videoListGroupedByGenre[genre]) {
          videoListGroupedByGenre[genre].push(video.id);
        } else {
          videoListGroupedByGenre[genre] = [video.id];
        }
      });
    });
    return videoListGroupedByGenre;
  });

  return { videos, getVideoList, videoListByGenres };
});
