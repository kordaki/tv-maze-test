import { reactive, computed, toRaw } from "vue";
import { defineStore } from "pinia";
import { getVideoScheduleRequest } from "@/services/api/VideoDataService";

export const useVideoListStore = defineStore("videoList", () => {
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
  const videoListGroupedByGenre = computed(() => {
    if (videos.error) return {};
    const videoListGroupedByGenre = { unknown: [] };
    Object.values(videos.list).forEach((video: any) => {
      if (video.genres.length === 0) {
        videoListGroupedByGenre["unknown"].push(video.id);
        return;
      }
      video.genres.forEach((genre: string) => {
        if (videoListGroupedByGenre[genre]) {
          videoListGroupedByGenre[genre].push(video.id);
        } else {
          videoListGroupedByGenre[genre] = [video.id];
        }
      });
    });
    return videoListGroupedByGenre;
  });

  const genresList = computed(() => Object.keys(videoListGroupedByGenre.value));

  // methods
  const videoListByGenre = (genreName: string) => {
    const videoListId = videoListGroupedByGenre.value[genreName];
    const res = videoListId.map((videoId: number) =>
      toRaw(videos.list[videoId])
    );
    return res;
  };

  return {
    videos,
    getVideoList,
    genresList,
    videoListGroupedByGenre,
    videoListByGenre,
  };
});
