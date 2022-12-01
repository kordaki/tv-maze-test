import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, test } from "vitest";
import { useVideoListStore } from "@/stores/videoList";
import { VideoMockBuilder } from "@/mock/VideoMockBuilder";
import type { Video } from "@/types/VideoType";

const videoMockBuilder = new VideoMockBuilder();

describe("VideoList Store", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  test("Videos should start with loading:false, error:null, list: {}", () => {
    const videoListStore = useVideoListStore();
    expect(videoListStore.videos.isLoading).toStrictEqual(false);
    expect(videoListStore.videos.error).toStrictEqual(null);
    expect(videoListStore.videos.list).toStrictEqual({});
  });

  test("Videos should start loading", () => {
    const videoListStore = useVideoListStore();
    videoListStore.updateVideos({ isLoading: true, error: null });
    expect(videoListStore.videos.isLoading).toStrictEqual(true);
  });

  test("videoListGroupedByGenre returns a correct genre list", () => {
    const videoListStore = useVideoListStore();
    const mockVideosCount = 10;
    const mockVideos = videoMockBuilder.createKeyListOf(mockVideosCount);
    videoListStore.$patch({
      videos: {
        isLoading: false,
        error: null,
        list: mockVideos,
      },
    });
    const groupedByGenre = videoListStore.videoListGroupedByGenre;
    const extractedGenresName: Array<string> = Object.keys(groupedByGenre);
    const selectedGenreName =
      extractedGenresName[extractedGenresName.length - 1];
    const membersIdOfSelectedGenre: Array<number> =
      groupedByGenre[selectedGenreName];
    const firstMemberId = membersIdOfSelectedGenre[0];
    expect(mockVideos[firstMemberId].genres).toContain(selectedGenreName);
  });

  test("genresList returns correct videos", () => {
    const videoListStore = useVideoListStore();
    const mockVideosCount = 10;
    const mockVideos = videoMockBuilder.createKeyListOf(mockVideosCount);
    videoListStore.$patch({
      videos: {
        isLoading: false,
        error: null,
        list: mockVideos,
      },
    });
    const groupedByGenre = videoListStore.videoListGroupedByGenre;
    const genresList = videoListStore.genresList;
    expect(Object.keys(groupedByGenre)).toStrictEqual(genresList);
  });

  test("sortVideoByRating returns the highest rating", () => {
    const videoListStore = useVideoListStore();
    const mockVideosCount = 10;
    const mockVideos = videoMockBuilder.createListOf(mockVideosCount);
    const sortedVideoList = videoListStore.sortVideoByRating(mockVideos);

    for (let i = 0; i < mockVideos.length - 1; i++) {
      expect(sortedVideoList[i].rating.average).toBeGreaterThanOrEqual(
        sortedVideoList[i + 1].rating.average
      );
    }
  });

  test("videoListByGenre returns a correct list of videos", () => {
    const videoListStore = useVideoListStore();
    const mockVideosCount = 10;
    const mockVideos = videoMockBuilder.createKeyListOf(mockVideosCount);
    videoListStore.$patch({
      videos: {
        isLoading: false,
        error: null,
        list: mockVideos,
      },
    });
    const randomNumber = videoMockBuilder.randomBetween(0, mockVideosCount);
    const randomVideoId = Object.keys(mockVideos)[randomNumber];
    const randomVideo = mockVideos[randomVideoId];
    const randomVideoGenre = randomVideo.genres[0];

    const videoListByGenre = videoListStore.videoListByGenre(
      randomVideoGenre,
      false
    );
    videoListByGenre.forEach((video: Video) =>
      expect(video.genres).toContain(randomVideoGenre)
    );

    const videoListIdByGenre = videoListByGenre.map((video: Video) => video.id);
    expect(videoListIdByGenre).toContain(Number(randomVideoId));
  });
});
