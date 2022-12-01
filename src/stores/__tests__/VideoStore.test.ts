import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, test } from "vitest";
import { useVideoStore } from "@/stores/video";

describe("Video Store", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  test("Video should start with loading:false, error:null, data: {}", () => {
    const videoListStore = useVideoStore();
    expect(videoListStore.video.isLoading).toStrictEqual(false);
    expect(videoListStore.video.error).toStrictEqual(null);
    expect(videoListStore.video.data).toStrictEqual({});
  });

  test("Videos should start loading", () => {
    const videoListStore = useVideoStore();
    videoListStore.updateVideo({ isLoading: true, error: null });
    expect(videoListStore.video.isLoading).toStrictEqual(true);
  });

});
