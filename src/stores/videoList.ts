import { reactive, computed, toRaw } from "vue";
import { defineStore } from "pinia";
import { getVideoScheduleRequest } from "@/services/api/VideoDataService";
import type { Video } from "@/types/VideoType";

type storeVideos = {
  isLoading: boolean;
  error?: Error | null;
  list?: Record<Video["id"], Video>;
};

export const useVideoListStore = defineStore("videoList", () => {
  const videos: storeVideos = reactive({
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

  const getVideoList = async () => {
    if (videos.isLoading) return;
    updateVideos({ isLoading: true, error: null });
    const [error, response] = await getVideoScheduleRequest();
    updateVideos({ isLoading: false, error: error, list: response });
  };

  // getters
  const videoListGroupedByGenre = computed(() => {
    if (videos.error) return {};
    const groupedByGenre = { Unknown: [] };
    Object.values(videos.list).forEach((video: Video) => {
      if (video.genres.length === 0) {
        groupedByGenre["Unknown"].push(video.id);
        return;
      }
      video.genres.forEach((genre: string) => {
        if (groupedByGenre[genre]) {
          groupedByGenre[genre].push(video.id);
        } else {
          groupedByGenre[genre] = [video.id];
        }
      });
    });
    return groupedByGenre;
  });

  const genresList = computed(() => Object.keys(videoListGroupedByGenre.value));

  // methods
  const sortVideoByRating = (videoList: Array<Video>) => {
    return videoList.sort((a: Video, b: Video) => {
      if (a.rating.average > b.rating.average) {
        return -1;
      }
      if (a.rating.average < b.rating.average) {
        return 1;
      }
      return 0;
    });
  };

  const videoListByGenre = (genreName: string, isSortEnable: boolean) => {
    const videoListId = videoListGroupedByGenre.value[genreName];
    let res = videoListId.map((videoId: number) => toRaw(videos.list[videoId]));
    if (isSortEnable) res = sortVideoByRating(res);
    return res;
  };

  return {
    videos,
    updateVideos,
    getVideoList,
    genresList,
    videoListGroupedByGenre,
    sortVideoByRating,
    videoListByGenre,
  };
});
